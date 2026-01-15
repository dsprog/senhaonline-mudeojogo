<?php
/**
 * Script de Envio de Email - Senha Comunicação
 * Usando PHPMailer
 */

// Permitir CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Verificar se é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit();
}

// Receber dados JSON
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validar campos obrigatórios
$required_fields = ['nome', 'empresa', 'email', 'whatsapp', 'assunto'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Campo '{$field}' é obrigatório"]);
        exit();
    }
}

// Validar email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit();
}

// Sanitizar dados
$nome = htmlspecialchars(strip_tags($data['nome']));
$empresa = htmlspecialchars(strip_tags($data['empresa']));
$email = htmlspecialchars(strip_tags($data['email']));
$whatsapp = htmlspecialchars(strip_tags($data['whatsapp']));
$assunto = htmlspecialchars(strip_tags($data['assunto']));

// Carregar PHPMailer
require_once __DIR__ . '/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/SMTP.php';
require_once __DIR__ . '/PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// ============================================
// CONFIGURAÇÕES DE EMAIL - ALTERE AQUI
// ============================================
$config = [
    // Configurações SMTP (Hostinger)
    'smtp_host' => 'smtp.hostinger.com',      // Servidor SMTP da Hostinger
    'smtp_port' => 465,                        // Porta SSL
    'smtp_secure' => 'ssl',                    // Tipo de segurança
    'smtp_auth' => true,                       // Autenticação
    
    // Credenciais do email remetente
    'smtp_user' => 'contato@senhaonline.com.br',  // Seu email na Hostinger
    'smtp_pass' => 'SUA_SENHA_AQUI',              // Senha do email
    
    // Destinatário
    'to_email' => 'SAC@SENHAONLINE.COM.BR',
    'to_name' => 'Senha Comunicação - SAC',
    
    // Remetente (como aparece no email)
    'from_email' => 'contato@senhaonline.com.br',
    'from_name' => 'Site Senha Comunicação'
];
// ============================================

try {
    $mail = new PHPMailer(true);
    
    // Configurações do servidor
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = $config['smtp_auth'];
    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_pass'];
    $mail->SMTPSecure = $config['smtp_secure'];
    $mail->Port = $config['smtp_port'];
    $mail->CharSet = 'UTF-8';
    
    // Remetente e destinatário
    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['to_email'], $config['to_name']);
    $mail->addReplyTo($email, $nome);
    
    // Conteúdo do email
    $mail->isHTML(true);
    $mail->Subject = "Novo Contato do Site - {$nome}";
    
    // Template HTML do email
    $mail->Body = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #DC143C, #8B0000); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #DC143C; }
            .field-label { font-weight: bold; color: #DC143C; font-size: 12px; text-transform: uppercase; }
            .field-value { margin-top: 5px; color: #333; }
            .message-box { background: white; padding: 15px; border-radius: 4px; border: 1px solid #ddd; margin-top: 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1 style='margin:0;'>📩 Novo Contato do Site</h1>
                <p style='margin:10px 0 0 0;'>Formulário de Contato - Mude o Jogo</p>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='field-label'>Nome Completo</div>
                    <div class='field-value'>{$nome}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Empresa</div>
                    <div class='field-value'>{$empresa}</div>
                </div>
                <div class='field'>
                    <div class='field-label'>Email</div>
                    <div class='field-value'><a href='mailto:{$email}'>{$email}</a></div>
                </div>
                <div class='field'>
                    <div class='field-label'>WhatsApp</div>
                    <div class='field-value'><a href='https://wa.me/55" . preg_replace('/\D/', '', $whatsapp) . "'>{$whatsapp}</a></div>
                </div>
                <div class='field'>
                    <div class='field-label'>Mensagem / Assunto</div>
                    <div class='message-box'>{$assunto}</div>
                </div>
            </div>
            <div class='footer'>
                <p>Este email foi enviado automaticamente pelo site.<br>
                <strong>Senha Comunicação</strong> - senhaonline.com.br</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Versão texto simples
    $mail->AltBody = "
NOVO CONTATO DO SITE - SENHA COMUNICAÇÃO
========================================

Nome: {$nome}
Empresa: {$empresa}
Email: {$email}
WhatsApp: {$whatsapp}

Mensagem:
{$assunto}

========================================
Este email foi enviado automaticamente pelo site.
    ";
    
    // Enviar
    $mail->send();
    
    echo json_encode([
        'success' => true, 
        'message' => 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Erro ao enviar mensagem. Tente novamente mais tarde.',
        'error' => $mail->ErrorInfo // Remova esta linha em produção
    ]);
}
?>
