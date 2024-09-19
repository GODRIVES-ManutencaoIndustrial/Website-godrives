"use client"
import { EmailTemplate } from "@/emailSettings/emailTemplate"

export default function EmailTeste() {
  const dataEmail = {
    name: "Teste",
    number: "(00) 00000-0000",
    email: "teste@gmail.com",
    vaga: "teste",
    textarea:
      "teste teste teste teste teste teste teste teste teste teste teste",
    subject: "Email de Contato - Website GO Drives",
  }
  return (
    <main>
      <EmailTemplate {...dataEmail} />
    </main>
  )
}
