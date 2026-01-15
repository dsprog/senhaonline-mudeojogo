<?php
/**
 * PHPMailer Exception Class
 */

namespace PHPMailer\PHPMailer;

class Exception extends \Exception
{
    public function errorMessage()
    {
        return '<strong>' . htmlspecialchars($this->getMessage(), ENT_COMPAT, 'UTF-8') . "</strong><br />\n";
    }
}
