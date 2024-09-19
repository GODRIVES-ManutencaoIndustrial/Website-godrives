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

  const emailTemplate = await render(
    EmailTemplate({
      name: body.name,
      email: body.email,
      number: body.number,
      textarea: body.textarea,
      subject: "Solicitação de Contato - Website GO Drives",
    }),
    { pretty: true },
  )

  const message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Email de Contato - Website GO Drives",
    html: emailTemplate,
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
