<?php
/**
 * PHPMailer SMTP Class
 */

namespace PHPMailer\PHPMailer;

class SMTP
{
    const VERSION = '6.8.0';
    const DEFAULT_PORT = 25;
    const MAX_LINE_LENGTH = 998;
    const MAX_REPLY_LENGTH = 512;
    const DEBUG_OFF = 0;
    const DEBUG_CLIENT = 1;
    const DEBUG_SERVER = 2;
    const DEBUG_CONNECTION = 3;
    const DEBUG_LOWLEVEL = 4;

    public $do_debug = self::DEBUG_OFF;
    public $Debugoutput = 'echo';
    public $do_verp = false;
    public $Timeout = 300;
    public $Timelimit = 300;

    protected $smtp_conn;
    protected $error = [];
    protected $helo_rply = '';
    protected $server_caps = [];
    protected $last_reply = '';

    public function connect($host, $port = null, $timeout = 30, $options = [])
    {
        $this->error = [];

        if (null === $port) {
            $port = self::DEFAULT_PORT;
        }

        $this->edebug("Connection: opening to $host:$port, timeout=$timeout", self::DEBUG_CONNECTION);

        $errno = 0;
        $errstr = '';
        
        $socket_context = stream_context_create($options);
        
        $this->smtp_conn = @stream_socket_client(
            $host . ':' . $port,
            $errno,
            $errstr,
            $timeout,
            STREAM_CLIENT_CONNECT,
            $socket_context
        );

        if (!is_resource($this->smtp_conn)) {
            $this->error = [
                'error' => 'Failed to connect to server',
                'errno' => $errno,
                'errstr' => $errstr
            ];
            $this->edebug("SMTP ERROR: $errstr ($errno)", self::DEBUG_CLIENT);
            return false;
        }

        stream_set_timeout($this->smtp_conn, $timeout, 0);

        $announce = $this->get_lines();
        $this->edebug("SERVER -> CLIENT: $announce", self::DEBUG_SERVER);

        return true;
    }

    public function startTLS()
    {
        if (!$this->sendCommand('STARTTLS', 'STARTTLS', 220)) {
            return false;
        }

        $crypto_method = STREAM_CRYPTO_METHOD_TLS_CLIENT;
        if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
            $crypto_method |= STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
            $crypto_method |= STREAM_CRYPTO_METHOD_TLSv1_1_CLIENT;
        }

        return stream_socket_enable_crypto($this->smtp_conn, true, $crypto_method);
    }

    public function authenticate($username, $password, $authtype = null, $oauth = null)
    {
        if (null === $authtype) {
            $authtype = 'LOGIN';
        }

        switch (strtoupper($authtype)) {
            case 'PLAIN':
                if (!$this->sendCommand('AUTH', 'AUTH PLAIN', 334)) {
                    return false;
                }
                $auth_data = base64_encode("\0" . $username . "\0" . $password);
                if (!$this->sendCommand('User & Password', $auth_data, 235)) {
                    return false;
                }
                break;
            case 'LOGIN':
                if (!$this->sendCommand('AUTH', 'AUTH LOGIN', 334)) {
                    return false;
                }
                if (!$this->sendCommand('Username', base64_encode($username), 334)) {
                    return false;
                }
                if (!$this->sendCommand('Password', base64_encode($password), 235)) {
                    return false;
                }
                break;
            case 'CRAM-MD5':
                if (!$this->sendCommand('AUTH CRAM-MD5', 'AUTH CRAM-MD5', 334)) {
                    return false;
                }
                $challenge = base64_decode(substr($this->last_reply, 4));
                $response = $username . ' ' . $this->hmac($challenge, $password);
                if (!$this->sendCommand('Username', base64_encode($response), 235)) {
                    return false;
                }
                break;
            default:
                $this->error = ['error' => 'Authentication method not supported'];
                return false;
        }
        return true;
    }

    protected function hmac($data, $key)
    {
        return hash_hmac('md5', $data, $key);
    }

    public function connected()
    {
        if (is_resource($this->smtp_conn)) {
            $sock_status = stream_get_meta_data($this->smtp_conn);
            if ($sock_status['eof']) {
                $this->close();
                return false;
            }
            return true;
        }
        return false;
    }

    public function close()
    {
        $this->error = [];
        $this->helo_rply = '';
        if (is_resource($this->smtp_conn)) {
            fclose($this->smtp_conn);
            $this->smtp_conn = null;
        }
    }

    public function hello($host = '')
    {
        return $this->sendHello('EHLO', $host) || $this->sendHello('HELO', $host);
    }

    protected function sendHello($hello, $host)
    {
        $noerror = $this->sendCommand($hello, $hello . ' ' . $host, 250);
        $this->helo_rply = $this->last_reply;
        
        if ('EHLO' === $hello) {
            $this->parseHelloFields($this->helo_rply);
        }
        
        return $noerror;
    }

    protected function parseHelloFields($type)
    {
        $this->server_caps = [];
        $lines = explode("\n", $this->helo_rply);
        
        foreach ($lines as $line) {
            $line = trim($line);
            if (empty($line)) {
                continue;
            }
            
            if (preg_match('/^[0-9]{3}[ -](.+)$/', $line, $matches)) {
                $field = $matches[1];
                $parts = explode(' ', $field, 2);
                $key = strtoupper($parts[0]);
                $value = isset($parts[1]) ? $parts[1] : true;
                $this->server_caps[$key] = $value;
            }
        }
    }

    public function mail($from)
    {
        return $this->sendCommand('MAIL FROM', 'MAIL FROM:<' . $from . '>', 250);
    }

    public function recipient($to)
    {
        return $this->sendCommand('RCPT TO', 'RCPT TO:<' . $to . '>', [250, 251]);
    }

    public function reset()
    {
        return $this->sendCommand('RSET', 'RSET', 250);
    }

    public function data($msg_data)
    {
        if (!$this->sendCommand('DATA', 'DATA', 354)) {
            return false;
        }

        $lines = explode("\n", str_replace(["\r\n", "\r"], "\n", $msg_data));
        $field = '';
        $in_headers = true;

        foreach ($lines as $line) {
            if ($in_headers && $line === '') {
                $in_headers = false;
            }
            
            if ('.' === substr($line, 0, 1)) {
                $line = '.' . $line;
            }
            
            $this->client_send($line . "\r\n");
        }

        return $this->sendCommand('DATA END', '.', 250);
    }

    public function quit($close_on_error = true)
    {
        $noerror = $this->sendCommand('QUIT', 'QUIT', 221);
        if ($close_on_error && !$noerror) {
            $this->close();
        }
        return $noerror;
    }

    protected function sendCommand($command, $commandstring, $expect)
    {
        if (!$this->connected()) {
            $this->error = ['error' => 'Called ' . $command . ' without being connected'];
            return false;
        }

        $this->client_send($commandstring . "\r\n");
        $this->last_reply = $this->get_lines();
        $this->edebug("SERVER -> CLIENT: $this->last_reply", self::DEBUG_SERVER);

        $matches = [];
        if (!preg_match('/^(\d{3})[ -](.*)$/ms', trim($this->last_reply), $matches)) {
            $this->error = [
                'error' => 'Invalid response',
                'detail' => $this->last_reply
            ];
            return false;
        }

        $code = (int)$matches[1];
        
        if (!is_array($expect)) {
            $expect = [$expect];
        }

        if (in_array($code, $expect, true)) {
            return true;
        }

        $this->error = [
            'error' => $command . ' command failed',
            'code' => $code,
            'detail' => $matches[2]
        ];
        return false;
    }

    protected function client_send($data)
    {
        $this->edebug("CLIENT -> SERVER: $data", self::DEBUG_CLIENT);
        return fwrite($this->smtp_conn, $data);
    }

    protected function get_lines()
    {
        if (!is_resource($this->smtp_conn)) {
            return '';
        }

        $data = '';
        $endtime = 0;

        stream_set_timeout($this->smtp_conn, $this->Timeout);

        while (is_resource($this->smtp_conn) && !feof($this->smtp_conn)) {
            $str = @fgets($this->smtp_conn, self::MAX_REPLY_LENGTH);
            $data .= $str;

            if (!isset($str[3]) || $str[3] === ' ' || $str[3] === "\r" || $str[3] === "\n") {
                break;
            }
        }

        return $data;
    }

    protected function edebug($str, $level = 0)
    {
        if ($level > $this->do_debug) {
            return;
        }

        switch ($this->Debugoutput) {
            case 'error_log':
                error_log($str);
                break;
            case 'html':
                echo htmlentities($str, ENT_QUOTES, 'UTF-8') . "<br>\n";
                break;
            case 'echo':
            default:
                echo $str . "\n";
        }
    }

    public function setTimeout($timeout)
    {
        $this->Timeout = $timeout;
    }

    public function setDebugLevel($level = 0)
    {
        $this->do_debug = $level;
    }

    public function setDebugOutput($method = 'echo')
    {
        $this->Debugoutput = $method;
    }

    public function getError()
    {
        return $this->error;
    }
}
