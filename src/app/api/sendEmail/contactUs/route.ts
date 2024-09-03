import { transporter } from "@/emailSettings/config"
import { NextRequest } from "next/server"

type BodyType = {
  name: string
  email: string
  number: string
  textarea: string
}

export async function POST(request: NextRequest) {
  const body: BodyType = await request.json()

  const emailSendData = {
    name: body.name,
    email: body.email,
    number: body.number,
    message: body.textarea,
  }

  const message = {
    from: process.env.EMAIL,
    to: emailSendData.email,
    subject: "Email do projeto GODRIVES",
    html: `
      <h3>Email enviado por ${emailSendData.name}, ${emailSendData.email}, ${emailSendData.number}</h3>
  
      <p>${emailSendData.message}</p>
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
