<?php
/**
 * PHPMailer - PHP email creation and transport class.
 * PHP Version 5.5+
 * @package PHPMailer
 * @link https://github.com/PHPMailer/PHPMailer/
 * @author Marcus Bointon (Synchro/coolbru) <phpmailer@synchromedia.co.uk>
 * @author Jim Jagielski (Jimjag) <jimjag@gmail.com>
 * @author Andy Prevost (Codeworxtech) <codeworxtech@users.sourceforge.net>
 * @author Brent R. Matzelle (original founder)
 * @copyright 2012 - 2020 Marcus Bointon
 * @copyright 2010 - 2012 Jim Jagielski
 * @copyright 2004 - 2009 Andy Prevost
 * @license http://www.gnu.org/copyleft/lesser.html GNU Lesser General Public License
 */

namespace PHPMailer\PHPMailer;

class PHPMailer
{
    const VERSION = '6.8.0';
    const CHARSET_ASCII = 'us-ascii';
    const CHARSET_ISO88591 = 'iso-8859-1';
    const CHARSET_UTF8 = 'utf-8';
    const CONTENT_TYPE_PLAINTEXT = 'text/plain';
    const CONTENT_TYPE_TEXT_HTML = 'text/html';
    const ENCODING_7BIT = '7bit';
    const ENCODING_8BIT = '8bit';
    const ENCODING_BASE64 = 'base64';
    const ENCODING_BINARY = 'binary';
    const ENCODING_QUOTED_PRINTABLE = 'quoted-printable';
    const ENCRYPTION_STARTTLS = 'tls';
    const ENCRYPTION_SMTPS = 'ssl';

    public $Priority;
    public $CharSet = self::CHARSET_UTF8;
    public $ContentType = self::CONTENT_TYPE_PLAINTEXT;
    public $Encoding = self::ENCODING_8BIT;
    public $ErrorInfo = '';
    public $From = '';
    public $FromName = '';
    public $Sender = '';
    public $Subject = '';
    public $Body = '';
    public $AltBody = '';
    public $Ical = '';
    public $MIMEBody = '';
    public $MIMEHeader = '';
    public $mailHeader = '';
    protected $to = [];
    protected $cc = [];
    protected $bcc = [];
    protected $ReplyTo = [];
    protected $all_recipients = [];
    protected $RecipientsQueue = [];
    protected $ReplyToQueue = [];
    protected $attachment = [];
    protected $CustomHeader = [];
    protected $lastMessageID = '';
    protected $message_type = '';
    protected $boundary = [];
    protected $language = [];
    protected $error_count = 0;
    protected $sign_cert_file = '';
    protected $sign_key_file = '';
    protected $sign_extracerts_file = '';
    protected $sign_key_pass = '';
    protected $exceptions = false;
    protected $uniqueid = '';

    public $Mailer = 'mail';
    public $Sendmail = '/usr/sbin/sendmail';
    public $UseSendmailOptions = true;
    public $Host = 'localhost';
    public $Port = 25;
    public $Helo = '';
    public $SMTPSecure = '';
    public $SMTPAutoTLS = true;
    public $SMTPAuth = false;
    public $SMTPOptions = [];
    public $Username = '';
    public $Password = '';
    public $AuthType = '';
    public $oauth;
    protected $smtp;
    public $Timeout = 300;
    public $SMTPDebug = 0;
    public $Debugoutput = 'echo';
    public $SMTPKeepAlive = false;
    public $SingleTo = false;
    public $do_verp = false;
    public $AllowEmpty = false;
    public $DKIM_selector = '';
    public $DKIM_identity = '';
    public $DKIM_passphrase = '';
    public $DKIM_domain = '';
    public $DKIM_copyHeaderFields = true;
    public $DKIM_extraHeaders = [];
    public $DKIM_private = '';
    public $DKIM_private_string = '';
    public $action_function = '';
    public $XMailer = '';
    public $LE = PHP_EOL;
    protected static $validator = 'php';
    
    const STOP_MESSAGE = 0;
    const STOP_CONTINUE = 1;
    const STOP_CRITICAL = 2;

    public function __construct($exceptions = null)
    {
        if (null !== $exceptions) {
            $this->exceptions = (bool) $exceptions;
        }
        $this->Debugoutput = (strpos(PHP_SAPI, 'cli') !== false ? 'echo' : 'html');
    }

    public function isSMTP()
    {
        $this->Mailer = 'smtp';
    }

    public function isMail()
    {
        $this->Mailer = 'mail';
    }

    public function isSendmail()
    {
        $ini_sendmail_path = ini_get('sendmail_path');
        if (false === stripos($ini_sendmail_path, 'sendmail')) {
            $this->Sendmail = '/usr/sbin/sendmail';
        } else {
            $this->Sendmail = $ini_sendmail_path;
        }
        $this->Mailer = 'sendmail';
    }

    public function isQmail()
    {
        $ini_sendmail_path = ini_get('sendmail_path');
        if (false === stripos($ini_sendmail_path, 'qmail')) {
            $this->Sendmail = '/var/qmail/bin/qmail-inject';
        } else {
            $this->Sendmail = $ini_sendmail_path;
        }
        $this->Mailer = 'qmail';
    }

    public function addAddress($address, $name = '')
    {
        return $this->addOrEnqueueAnAddress('to', $address, $name);
    }

    public function addCC($address, $name = '')
    {
        return $this->addOrEnqueueAnAddress('cc', $address, $name);
    }

    public function addBCC($address, $name = '')
    {
        return $this->addOrEnqueueAnAddress('bcc', $address, $name);
    }

    public function addReplyTo($address, $name = '')
    {
        return $this->addOrEnqueueAnAddress('Reply-To', $address, $name);
    }

    protected function addOrEnqueueAnAddress($kind, $address, $name)
    {
        $address = trim($address);
        $name = trim(preg_replace('/[\r\n]+/', '', $name));
        $pos = strrpos($address, '@');
        if (false === $pos) {
            $this->setError("Invalid address: {$address}");
            if ($this->exceptions) {
                throw new Exception("Invalid address: {$address}");
            }
            return false;
        }
        $params = [$kind, $address, $name];
        if ('Reply-To' !== $kind) {
            if (!array_key_exists($address, $this->all_recipients)) {
                $this->{$kind}[] = $params;
                $this->all_recipients[$address] = true;
                return true;
            }
        } else {
            if (!array_key_exists($address, $this->ReplyTo)) {
                $this->ReplyTo[$address] = $params;
                return true;
            }
        }
        return false;
    }

    public function setFrom($address, $name = '', $auto = true)
    {
        $address = trim($address);
        $name = trim(preg_replace('/[\r\n]+/', '', $name));
        $pos = strrpos($address, '@');
        if (false === $pos) {
            $this->setError("Invalid address: {$address}");
            if ($this->exceptions) {
                throw new Exception("Invalid address: {$address}");
            }
            return false;
        }
        $this->From = $address;
        $this->FromName = $name;
        if ($auto && empty($this->Sender)) {
            $this->Sender = $address;
        }
        return true;
    }

    public function clearAddresses()
    {
        $this->to = [];
        $this->all_recipients = [];
    }

    public function clearCCs()
    {
        $this->cc = [];
    }

    public function clearBCCs()
    {
        $this->bcc = [];
    }

    public function clearReplyTos()
    {
        $this->ReplyTo = [];
    }

    public function clearAllRecipients()
    {
        $this->to = [];
        $this->cc = [];
        $this->bcc = [];
        $this->all_recipients = [];
    }

    public function clearAttachments()
    {
        $this->attachment = [];
    }

    public function clearCustomHeaders()
    {
        $this->CustomHeader = [];
    }

    public function isHTML($isHtml = true)
    {
        if ($isHtml) {
            $this->ContentType = static::CONTENT_TYPE_TEXT_HTML;
        } else {
            $this->ContentType = static::CONTENT_TYPE_PLAINTEXT;
        }
    }

    public function send()
    {
        try {
            if (!$this->preSend()) {
                return false;
            }
            return $this->postSend();
        } catch (Exception $exc) {
            $this->setError($exc->getMessage());
            if ($this->exceptions) {
                throw $exc;
            }
            return false;
        }
    }

    public function preSend()
    {
        if (empty($this->to) && empty($this->cc) && empty($this->bcc)) {
            throw new Exception('You must provide at least one recipient email address.');
        }

        if (!empty($this->AltBody)) {
            $this->ContentType = static::CONTENT_TYPE_TEXT_HTML;
        }

        $this->setMessageType();
        $header = $this->createHeader();
        $body = $this->createBody();
        $this->MIMEHeader = $header;
        $this->MIMEBody = $body;

        return true;
    }

    public function postSend()
    {
        try {
            switch ($this->Mailer) {
                case 'sendmail':
                case 'qmail':
                    return $this->sendmailSend($this->MIMEHeader, $this->MIMEBody);
                case 'smtp':
                    return $this->smtpSend($this->MIMEHeader, $this->MIMEBody);
                case 'mail':
                    return $this->mailSend($this->MIMEHeader, $this->MIMEBody);
                default:
                    return $this->mailSend($this->MIMEHeader, $this->MIMEBody);
            }
        } catch (Exception $exc) {
            $this->setError($exc->getMessage());
            if ($this->exceptions) {
                throw $exc;
            }
            return false;
        }
    }

    protected function sendmailSend($header, $body)
    {
        $header = str_replace("\r\n", "\n", $header);
        $body = str_replace("\r\n", "\n", $body);

        $sendmailFmt = '%s -oi -f%s -t';
        $sendmail = sprintf($sendmailFmt, escapeshellcmd($this->Sendmail), $this->Sender);

        $mail = @popen($sendmail, 'w');
        if (!$mail) {
            throw new Exception('Could not execute: ' . $this->Sendmail);
        }

        fwrite($mail, $header);
        fwrite($mail, $body);
        $result = pclose($mail);
        
        return 0 === $result;
    }

    protected function mailSend($header, $body)
    {
        $toArr = [];
        foreach ($this->to as $toaddr) {
            $toArr[] = $this->addrFormat($toaddr);
        }
        $to = implode(', ', $toArr);

        $params = '';
        if (!empty($this->Sender) && ini_get('safe_mode') == false) {
            $params = sprintf('-f%s', $this->Sender);
        }

        $result = @mail($to, $this->encodeHeader($this->Subject), $body, $header, $params);
        
        if (!$result) {
            throw new Exception('Could not instantiate mail function.');
        }
        return true;
    }

    protected function smtpSend($header, $body)
    {
        if (!$this->smtpConnect()) {
            throw new Exception('SMTP connect() failed.');
        }

        $smtp_from = ('' !== $this->Sender) ? $this->Sender : $this->From;
        
        if (!$this->smtp->mail($smtp_from)) {
            $this->setError('The following From address failed: ' . $smtp_from);
            throw new Exception('The following From address failed: ' . $smtp_from);
        }

        $toArr = [];
        foreach ([$this->to, $this->cc, $this->bcc] as $kind) {
            foreach ($kind as $address) {
                $toArr[] = $address[1];
            }
        }

        foreach ($toArr as $to) {
            if (!$this->smtp->recipient($to)) {
                $this->setError('The following To address failed: ' . $to);
                throw new Exception('The following To address failed: ' . $to);
            }
        }

        if (!$this->smtp->data($header . $body)) {
            $this->setError('SMTP data() failed.');
            throw new Exception('SMTP data() failed.');
        }

        if ($this->SMTPKeepAlive) {
            $this->smtp->reset();
        } else {
            $this->smtp->quit();
            $this->smtp->close();
        }

        return true;
    }

    public function smtpConnect($options = null)
    {
        if (null === $this->smtp) {
            $this->smtp = new SMTP();
        }

        if (null === $options) {
            $options = $this->SMTPOptions;
        }

        $hosts = explode(';', $this->Host);
        $lastexception = null;

        foreach ($hosts as $hostentry) {
            $hostinfo = [];
            $host = $hostentry;
            $port = $this->Port;
            $prefix = '';

            if ('' !== $this->SMTPSecure) {
                switch ($this->SMTPSecure) {
                    case 'ssl':
                        $prefix = 'ssl://';
                        break;
                    case 'tls':
                        $prefix = '';
                        break;
                }
            }

            $this->smtp->setTimeout($this->Timeout);
            $this->smtp->setDebugLevel($this->SMTPDebug);
            $this->smtp->setDebugOutput($this->Debugoutput);

            $connected = $this->smtp->connect($prefix . $host, $port, $this->Timeout, $options);
            
            if ($connected) {
                $hello = ('' !== $this->Helo) ? $this->Helo : $this->serverHostname();
                $this->smtp->hello($hello);

                if ('tls' === $this->SMTPSecure) {
                    if (!$this->smtp->startTLS()) {
                        throw new Exception('Could not start TLS.');
                    }
                    $this->smtp->hello($hello);
                }

                if ($this->SMTPAuth) {
                    if (!$this->smtp->authenticate($this->Username, $this->Password, $this->AuthType, $this->oauth)) {
                        throw new Exception('SMTP Error: Could not authenticate.');
                    }
                }
                return true;
            }
        }

        $this->smtp->close();
        throw new Exception('SMTP connect() failed.');
    }

    public function smtpClose()
    {
        if ((null !== $this->smtp) && $this->smtp->connected()) {
            $this->smtp->quit();
            $this->smtp->close();
        }
    }

    protected function setError($msg)
    {
        ++$this->error_count;
        $this->ErrorInfo = $msg;
    }

    protected function setMessageType()
    {
        $type = [];
        if ($this->alternativeExists()) {
            $type[] = 'alt';
        }
        if ($this->inlineImageExists()) {
            $type[] = 'inline';
        }
        if ($this->attachmentExists()) {
            $type[] = 'attach';
        }
        $this->message_type = implode('_', $type);
        if ('' === $this->message_type) {
            $this->message_type = 'plain';
        }
    }

    public function alternativeExists()
    {
        return !empty($this->AltBody);
    }

    public function inlineImageExists()
    {
        foreach ($this->attachment as $attachment) {
            if ('inline' === $attachment[6]) {
                return true;
            }
        }
        return false;
    }

    public function attachmentExists()
    {
        foreach ($this->attachment as $attachment) {
            if ('attachment' === $attachment[6]) {
                return true;
            }
        }
        return false;
    }

    protected function createHeader()
    {
        $header = '';
        $header .= 'Date: ' . date('D, j M Y H:i:s O') . $this->LE;

        if ('mail' !== $this->Mailer) {
            if (!empty($this->to)) {
                $toArr = [];
                foreach ($this->to as $toaddr) {
                    $toArr[] = $this->addrFormat($toaddr);
                }
                $header .= 'To: ' . implode(', ', $toArr) . $this->LE;
            }
        }

        $header .= 'From: ' . $this->addrFormat([$this->From, $this->FromName]) . $this->LE;

        if (!empty($this->cc)) {
            $ccArr = [];
            foreach ($this->cc as $ccaddr) {
                $ccArr[] = $this->addrFormat($ccaddr);
            }
            $header .= 'Cc: ' . implode(', ', $ccArr) . $this->LE;
        }

        if (!empty($this->ReplyTo)) {
            $replyToArr = [];
            foreach ($this->ReplyTo as $replyTo) {
                $replyToArr[] = $this->addrFormat($replyTo);
            }
            $header .= 'Reply-To: ' . implode(', ', $replyToArr) . $this->LE;
        }

        if ('mail' !== $this->Mailer) {
            $header .= 'Subject: ' . $this->encodeHeader($this->Subject) . $this->LE;
        }

        $header .= 'Message-ID: <' . $this->createMessageId() . '>' . $this->LE;
        $header .= 'X-Mailer: PHPMailer ' . self::VERSION . $this->LE;
        $header .= 'MIME-Version: 1.0' . $this->LE;
        $header .= $this->getMailMIME();

        return $header;
    }

    protected function createMessageId()
    {
        $this->lastMessageID = sprintf(
            '<%s.%s@%s>',
            base_convert((string)time(), 10, 36),
            base_convert(bin2hex(random_bytes(8)), 16, 36),
            $this->serverHostname()
        );
        return $this->lastMessageID;
    }

    protected function getMailMIME()
    {
        $result = '';
        $boundary = $this->uniqueid;
        
        if (empty($boundary)) {
            $boundary = md5(uniqid(time()));
            $this->uniqueid = $boundary;
        }

        switch ($this->message_type) {
            case 'plain':
                $result .= 'Content-Type: ' . $this->ContentType . '; charset=' . $this->CharSet . $this->LE;
                break;
            case 'alt':
                $result .= 'Content-Type: multipart/alternative; boundary="' . $boundary . '"' . $this->LE . $this->LE;
                break;
            default:
                $result .= 'Content-Type: ' . $this->ContentType . '; charset=' . $this->CharSet . $this->LE;
        }
        return $result;
    }

    protected function createBody()
    {
        $body = '';
        $boundary = $this->uniqueid;
        
        if (empty($boundary)) {
            $boundary = md5(uniqid(time()));
            $this->uniqueid = $boundary;
        }

        switch ($this->message_type) {
            case 'plain':
                $body .= $this->encodeString($this->Body, $this->Encoding);
                break;
            case 'alt':
                $body .= '--' . $boundary . $this->LE;
                $body .= 'Content-Type: text/plain; charset=' . $this->CharSet . $this->LE;
                $body .= 'Content-Transfer-Encoding: ' . $this->Encoding . $this->LE . $this->LE;
                $body .= $this->encodeString($this->AltBody, $this->Encoding) . $this->LE . $this->LE;
                
                $body .= '--' . $boundary . $this->LE;
                $body .= 'Content-Type: text/html; charset=' . $this->CharSet . $this->LE;
                $body .= 'Content-Transfer-Encoding: ' . $this->Encoding . $this->LE . $this->LE;
                $body .= $this->encodeString($this->Body, $this->Encoding) . $this->LE . $this->LE;
                
                $body .= '--' . $boundary . '--' . $this->LE;
                break;
            default:
                $body .= $this->encodeString($this->Body, $this->Encoding);
        }
        return $body;
    }

    protected function addrFormat($addr)
    {
        if (empty($addr[1])) {
            return $addr[0];
        }
        return $this->encodeHeader($addr[1]) . ' <' . $addr[0] . '>';
    }

    public function encodeHeader($str)
    {
        if (preg_match('/[\x80-\xFF]/', $str)) {
            return '=?' . $this->CharSet . '?B?' . base64_encode($str) . '?=';
        }
        return $str;
    }

    public function encodeString($str, $encoding = self::ENCODING_BASE64)
    {
        switch ($encoding) {
            case self::ENCODING_BASE64:
                return chunk_split(base64_encode($str), 76, $this->LE);
            case self::ENCODING_QUOTED_PRINTABLE:
                return quoted_printable_encode($str);
            case self::ENCODING_8BIT:
            case self::ENCODING_7BIT:
            case self::ENCODING_BINARY:
            default:
                return $str;
        }
    }

    protected function serverHostname()
    {
        if (!empty($this->Hostname)) {
            return $this->Hostname;
        }
        if (isset($_SERVER['SERVER_NAME'])) {
            return $_SERVER['SERVER_NAME'];
        }
        return 'localhost.localdomain';
    }
}
