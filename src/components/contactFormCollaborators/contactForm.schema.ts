import * as z from "zod"

export const contactFormCollaboratorsSchema = z.object({
  name: z.string().min(3, { message: "Nome inválido" }),
  number: z.string(),
  email: z.string().email({ message: "Email inválido" }),
  textarea: z.string().min(3, { message: "Fale sobre você" }),
  sector: z.string().min(3, { message: "Setor inválido" }),
  vaga: z.string().min(3, { message: "Vaga inválida" }),
})

export type TypeContactFormCollaboratorsSchema = z.infer<
  typeof contactFormCollaboratorsSchema
>
