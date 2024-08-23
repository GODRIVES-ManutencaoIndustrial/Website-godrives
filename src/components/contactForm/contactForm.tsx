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
      className="flex w-full flex-col gap-6 py-3"
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
          Número
        </label>
        <input
          {...register("number")}
          type="text"
          id="number"
          placeholder="Número"
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

      <div>
        <input
          type="submit"
          value={"Enviar"}
          className="inline-flex h-16 w-full items-center justify-center rounded-md bg-secondary-500 text-sm font-medium text-primaryWhite transition-all hover:brightness-150"
        />
      </div>
    </form>
  )
}
