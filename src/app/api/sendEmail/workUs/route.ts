import { transporter } from "@/emailSettings/config"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.formData()

  const emailSendData = {
    name: body.get("name"),
    email: body.get("email"),
    number: body.get("number"),
    message: body.get("message"),
  }

  const message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Email do projeto GODRIVES",
    html: `
      <h3>Email enviado por ${emailSendData.name}, ${emailSendData.email}, ${emailSendData.number}</h3>
  
      <p>${emailSendData.message}</p>
    `,
  }

  try {
    const sendEmail = await transporter.sendMail(message)
    return Response.json(sendEmail)
  } catch (error) {
    console.log(error)
    return Response.error()
  }
}
