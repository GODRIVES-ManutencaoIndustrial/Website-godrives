"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, ContactFormSchema } from "./contactForm.schema"
import { Span } from "next/dist/trace"
import { spawn } from "child_process"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = (data: ContactFormSchema) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 py-3"
    >
      <div className="flex flex-col gap-2">
        <label className="text-secondary-300 text-sm" htmlFor="name">
          Nome
        </label>
        <input
          {...register("name")}
          id="name"
          placeholder="Nome"
          className="text-secondary-300 border-secondary-50 h-16 rounded-md border px-3"
        />
        {errors.name && (
          <span className="text-red-600 text-sm">{errors.name?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-secondary-300 text-sm" htmlFor="number">
          Número
        </label>
        <input
          {...register("number")}
          type="text"
          id="number"
          placeholder="Número"
          className="text-secondary-300 border-secondary-50 h-16 rounded-md border px-3"
        />
        {errors.number && (
          <span className="text-red-600 text-sm">{errors.number?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-secondary-300 text-sm" htmlFor="email">
          Email
        </label>
        <input
          {...register("email")}
          type="text"
          id="email"
          placeholder="Email"
          className="text-secondary-300 border-secondary-50 h-16 rounded-md border px-3"
        />
        {errors.email && (
          <span className="text-red-600 text-sm">{errors.email?.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-secondary-300 text-sm" htmlFor="message">
          Mensagem
        </label>
        <textarea
          {...register("textarea")}
          placeholder="Escreva algo..."
          id="message"
          className="text-secondary-300 border-secondary-50 h-28 rounded-md border px-3 py-3"
        />
        {errors.textarea && (
          <span className="text-red-600 text-sm">
            {errors.textarea?.message}
          </span>
        )}
      </div>

      <div>
        <input
          type="submit"
          value={"Enviar"}
          className="bg-secondary-500 inline-flex h-16 w-full items-center justify-center rounded-md text-sm font-medium text-primaryWhite transition-all hover:brightness-150"
        />
      </div>
    </form>
  )
}
