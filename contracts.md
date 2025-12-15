# Contratos API - Senha Comunicação Landing Page

## Objetivo
Integrar o formulário de contato do frontend com o backend para processar e enviar os dados via e-mail para sac@senhaonline.com.br

## Dados Mock no Frontend
**Arquivo:** `/app/frontend/src/mock.js`
- `mockSubmitForm()` - simula envio do formulário salvando no localStorage

## API Endpoints a Implementar

### POST /api/contact
**Descrição:** Recebe dados do formulário e envia e-mail

**Request Body:**
```json
{
  "nome": "string",
  "email": "string",
  "telefone": "string",
  "empresa": "string",
  "mensagem": "string"
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Contato enviado com sucesso"
}
```

**Response Error (400/500):**
```json
{
  "success": false,
  "message": "Mensagem de erro"
}
```

## Modelo MongoDB
**Collection:** `contacts`

**Schema:**
```python
{
  "id": "string (uuid)",
  "nome": "string",
  "email": "string", 
  "telefone": "string",
  "empresa": "string",
  "mensagem": "string",
  "timestamp": "datetime",
  "email_sent": "boolean",
  "ip_address": "string (opcional)"
}
```

## Integração Frontend → Backend

### Mudanças Necessárias:

1. **Remover mock:** Deletar import e uso de `mockSubmitForm` em `/app/frontend/src/components/ContactForm.jsx`

2. **Adicionar chamada API real:**
```javascript
const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
```

## Serviço de E-mail

**Método:** SMTP ou serviço de e-mail (SendGrid, Mailgun, etc.)

**Destinatário:** sac@senhaonline.com.br

**Template do E-mail:**
```
Assunto: Novo Agendamento de Consultoria - [Nome da Empresa]

Novo contato recebido através do site:

Nome: [nome]
E-mail: [email]
Telefone: [telefone]
Empresa: [empresa]

Mensagem:
[mensagem]

---
Data: [timestamp]
```

## Fluxo Completo

1. Usuário preenche formulário
2. Frontend valida campos obrigatórios
3. POST request para `/api/contact`
4. Backend valida dados
5. Backend salva no MongoDB
6. Backend envia e-mail para sac@senhaonline.com.br
7. Backend retorna sucesso/erro
8. Frontend exibe toast de confirmação
9. Frontend limpa formulário em caso de sucesso
