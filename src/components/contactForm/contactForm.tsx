"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, ContactFormSchema } from "./contactForm.schema"
import { useToast } from "@/hooks/use-toast"
import { LoaderCircle } from "lucide-react"
import { useState } from "react"
import InputMask from "react-input-mask"

type ContactFormProps = {
  url: string | undefined
}

export default function ContactForm({ url }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  const [loading, setLoading] = useState<boolean>()
  const { toast } = useToast()

  const onSubmit = async (formData: ContactFormSchema) => {
    setLoading(true)
    try {
      const response = await fetch(`${url}/api/sendEmail/contactUs`, {
        method: "POST",
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error()
      }
      toast({ description: "Email enviado com sucesso" })
    } catch (error) {
      toast({
        title: "Email não foi enviado",
        description: "Aconteceu algo de errado",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
    console.log("teste")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-lg flex-col gap-7 py-3"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm text-secondary-300" htmlFor="name">
          Nome
        </label>
        <input
          {...register("name")}
          id="name"
          placeholder="Nome"
          className="h-16 rounded-md border border-secondary-50 px-3 text-secondary-300"
        />
        {errors.name && (
          <span className="text-sm text-red-600">{errors.name?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-secondary-300" htmlFor="number">
          Telefone
        </label>

        <InputMask
          {...register("number")}
          mask="(99) 99999-9999"
          id="number"
          placeholder="Telefone"
          className="h-16 rounded-md border border-secondary-50 px-3 text-secondary-300"
        />
        {errors.number && (
          <span className="text-sm text-red-600">{errors.number?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-secondary-300" htmlFor="email">
          Email
        </label>
        <input
          {...register("email")}
          type="text"
          id="email"
          placeholder="Email"
          className="h-16 rounded-md border border-secondary-50 px-3 text-secondary-300"
        />
        {errors.email && (
          <span className="text-sm text-red-600">{errors.email?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-secondary-300" htmlFor="message">
          Mensagem
        </label>
        <textarea
          {...register("textarea")}
          placeholder="Escreva algo..."
          id="message"
          className="h-32 rounded-md border border-secondary-50 px-3 py-3 text-secondary-300"
        />
        {errors.textarea && (
          <span className="text-sm text-red-600">
            {errors.textarea?.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className={`inline-flex h-16 w-full items-center justify-center rounded-md bg-secondary-500 text-sm font-medium text-primaryWhite transition-all hover:brightness-150 ${loading ? "brightness-150" : ""}`}
      >
        {loading ? (
          <LoaderCircle className="animate-spin" size={24} />
        ) : (
          "Enviar"
        )}
      </button>
    </form>
  )
}
