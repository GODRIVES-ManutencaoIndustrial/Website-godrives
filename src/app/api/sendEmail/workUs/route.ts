import { transporter } from "@/emailSettings/config"
import { EmailTemplate } from "@/emailSettings/emailTemplate"
import { render } from "@react-email/components"
import { File } from "buffer"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.formData()

  const fileFormData = body.get("file") as File | null

  if (!fileFormData) {
    return new Response(`File not found`, { status: 400 })
  }

  const fileArrayBuffer = await fileFormData.arrayBuffer()
  const filebuffer = Buffer.from(fileArrayBuffer)

  const emailSendData = {
    name: body.get("name"),
    email: body.get("email"),
    number: body.get("number"),
    message: body.get("textarea"),
    file: body.get("file"),
    vaga: body.get("vaga"),
    filebuffer,
  }

  const emailTemplate = await render(
    EmailTemplate({
      name: `${emailSendData.name}`,
      email: `${emailSendData.email}`,
      number: `${emailSendData.number}`,
      textarea: `${emailSendData.message}`,
      vaga: `${emailSendData.vaga}`,
      subject: "Envio de Currículo - Website GO Drives",
    }),
    { pretty: true },
  )

  const message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Envio de Currículo - Website GO Drives",
    html: emailTemplate,
    attachments: [
      {
        filename: fileFormData.name,
        content: filebuffer,
        contentType: fileFormData.type,
      },
    ],
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
