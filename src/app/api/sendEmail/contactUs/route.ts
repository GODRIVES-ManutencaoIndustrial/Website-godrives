import { transporter } from "@/emailSettings/config"
import { render } from "@react-email/components"
import { NextRequest } from "next/server"
import { EmailTemplate } from "@/emailSettings/emailTemplate"

type BodyType = {
  name: string
  email: string
  number: string
  textarea: string
}

export async function POST(request: NextRequest) {
  const body: BodyType = await request.json()

  const emailTemplate = {
    name: body.name,
    email: body.email,
    number: body.number,
    textarea: body.textarea,
  }

  const message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Email de Contato - Website GO Drives",
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Candidatura Recebida</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f4;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #094472;
    }
    .footer {
      margin-top: 20px;
      text-align: center;
      font-size: 12px;
      color: #888;
    }
    .footer a {
      color: #094472;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Email de contato - Website GO Drives</h2>

    <h3>Dados enviados pelo usuário:</h3>
    <ul>
      <li><strong>Nome:</strong> ${emailTemplate.name}</li>
      <li><strong>Telefone:</strong> ${emailTemplate.number}</li>
      <li><strong>E-mail:</strong> ${emailTemplate.email}</li>
      <li><strong>Mensagem:</strong>${emailTemplate.textarea}</li>
    </ul>

    <p>Obrigado,</p>
    <p><strong>Equipe GO Drives</strong></p>
    <p><a href="https://website-tau-pink.vercel.app">https://website-tau-pink.vercel.app</a></p>

    <div class="footer">
      <p>&copy; GO Drives. Todos os direitos reservados.</p>
    </div>
  </div>
</body>
</html>
  `,
  }

  try {
    const sendEmail = await transporter.sendMail(message)
    return new Response(`Email send sucessfull: ${sendEmail.response}`, {
      status: 200,
    })
  } catch (error: any) {
    return new Response(`Emai sending error: ${error.message}`, { status: 400 })
  }
}
