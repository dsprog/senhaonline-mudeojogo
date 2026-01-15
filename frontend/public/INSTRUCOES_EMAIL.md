# 📧 Instruções de Configuração do Email - Senha Comunicação

## Arquivos Criados

```
/mudeojogo/
├── api/
│   ├── contact.php          # Script principal de envio
│   └── PHPMailer/
│       ├── PHPMailer.php    # Classe principal
│       ├── SMTP.php         # Classe SMTP
│       └── Exception.php    # Classe de exceções
```

## ⚙️ Configuração Necessária

### Passo 1: Editar o arquivo `contact.php`

Abra o arquivo `api/contact.php` e edite as linhas 54-67 com suas credenciais:

```php
$config = [
    // Configurações SMTP (Hostinger)
    'smtp_host' => 'smtp.hostinger.com',      // Servidor SMTP da Hostinger
    'smtp_port' => 465,                        // Porta SSL
    'smtp_secure' => 'ssl',                    // Tipo de segurança
    'smtp_auth' => true,                       // Autenticação
    
    // ALTERE ESTAS LINHAS:
    'smtp_user' => 'contato@senhaonline.com.br',  // Seu email na Hostinger
    'smtp_pass' => 'SUA_SENHA_AQUI',              // ← COLOQUE SUA SENHA AQUI
    
    // Destinatário
    'to_email' => 'SAC@SENHAONLINE.COM.BR',
    'to_name' => 'Senha Comunicação - SAC',
    
    // Remetente
    'from_email' => 'contato@senhaonline.com.br',
    'from_name' => 'Site Senha Comunicação'
];
```

### Passo 2: Criar Email na Hostinger (se ainda não existir)

1. Acesse o **hPanel** da Hostinger
2. Vá em **Emails** → **Contas de Email**
3. Crie o email `contato@senhaonline.com.br`
4. Anote a senha criada

### Passo 3: Configurações SMTP da Hostinger

Se usar Hostinger, as configurações padrão são:
- **Host SMTP:** `smtp.hostinger.com`
- **Porta:** `465` (SSL) ou `587` (TLS)
- **Segurança:** `ssl` ou `tls`

Se usar outro provedor, consulte a documentação deles.

## 🧪 Testando

1. Acesse `https://senhaonline.com.br/mudeojogo`
2. Role até o formulário de contato
3. Preencha e envie
4. Verifique se recebeu o email em `SAC@SENHAONLINE.COM.BR`

## 🔧 Solução de Problemas

### Erro "SMTP connect() failed"
- Verifique se as credenciais estão corretas
- Confirme se a porta 465 está liberada no servidor

### Erro "Could not authenticate"
- A senha do email pode estar incorreta
- Verifique se o email existe na Hostinger

### Email não chega
- Verifique a pasta de spam
- Confirme se o email destinatário está correto

## 📝 Segurança

⚠️ **IMPORTANTE:** Em produção, remova a linha que mostra o erro detalhado:
```php
// Remova esta linha em produção:
'error' => $mail->ErrorInfo
```

---

Qualquer dúvida, entre em contato!
