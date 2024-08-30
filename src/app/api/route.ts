import { get } from "http"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.formData()
  const emailSendData = {
    nome: body.get("name"),
    email: body.get("email"),
    number: body.get("number"),
    message: body.get("message"),
  }

  return Response.json(emailSendData)
}
