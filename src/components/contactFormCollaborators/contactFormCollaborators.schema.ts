import * as z from "zod"

export const contactFormCollaboratorsSchema = z.object({
  name: z.string().min(3, { message: "Nome inválido" }),
  number: z.string().min(3, { message: "Número inválido" }),
  email: z.string().email({ message: "Email inválido" }),
  textarea: z.string().min(3, { message: "Fale sobre você" }),
  vaga: z.string().min(3, { message: "Vaga inválida" }),
  file:
    typeof window !== "undefined"
      ? z
          .instanceof(FileList)
          .refine((files) => files.length > 0, "Selecione um arquivo.")
          .refine(
            (files) => files[0]?.size <= 5 * 1024 * 1024,
            "O arquivo deve ter no máximo 5MB.",
          )
      : z.any(),
})

export type TypeContactFormCollaboratorsSchema = z.infer<
  typeof contactFormCollaboratorsSchema
>
