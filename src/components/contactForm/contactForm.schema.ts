import * as z from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Nome inválido" }),
  number: z.string(),
  email: z.string().email({ message: "Email inválido" }),
  textarea: z.string(),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
