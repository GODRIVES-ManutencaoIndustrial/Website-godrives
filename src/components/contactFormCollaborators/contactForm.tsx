"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  contactFormCollaboratorsSchema,
  TypeContactFormCollaboratorsSchema,
} from "./contactForm.schema"

export default function ContactFormCollaborators() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeContactFormCollaboratorsSchema>({
    resolver: zodResolver(contactFormCollaboratorsSchema),
  })

  const onSubmit = (data: TypeContactFormCollaboratorsSchema) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-6 py-3"
    >
      <div className="flex w-full max-w-4xl gap-10 max-lg:flex-col">
        <div className="flex w-1/2 flex-col gap-5 max-lg:w-full">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-secondary-300" htmlFor="name">
              Nome
            </label>
            <input
              {...register("name")}
              id="name"
              placeholder="Nome"
              className="h-16 rounded-md border border-secondary-50 px-3 text-secondary-300 placeholder:brightness-125"
            />
            {errors.name && (
              <span className="text-sm text-red-600">
                {errors.name?.message}
              </span>
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
              className="h-16 rounded-md border border-secondary-50 px-3 text-secondary-300 placeholder:brightness-125"
            />
            {errors.number && (
              <span className="text-sm text-red-600">
                {errors.number?.message}
              </span>
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
              className="h-16 rounded-md border border-secondary-50 px-3 text-secondary-300 placeholder:brightness-125"
            />
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-secondary-300" htmlFor="email">
              Setor
            </label>
            <input
              {...register("email")}
              type="text"
              id="email"
              placeholder="Setor"
              className="h-16 rounded-md border border-secondary-50 px-3 text-secondary-300 placeholder:brightness-125"
            />
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email?.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex w-1/2 flex-col gap-5 max-lg:w-full">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-secondary-300" htmlFor="email">
              Vaga pretendida
            </label>
            <input
              {...register("email")}
              type="text"
              id="email"
              placeholder="Vaga pretendida"
              className="h-16 rounded-md border border-secondary-50 px-3 text-secondary-300 placeholder:brightness-125"
            />
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-secondary-300" htmlFor="message">
              Mensagem
            </label>
            <textarea
              {...register("textarea")}
              placeholder="Fale sobre você..."
              id="message"
              className="h-72 rounded-md border border-secondary-50 px-3 py-3 text-secondary-300 placeholder:brightness-125"
            />
            {errors.textarea && (
              <span className="text-sm text-red-600">
                {errors.textarea?.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="my-8 flex w-full justify-center">
        <div className="flex items-center gap-5">
          <button className="w-40 rounded-xl bg-red py-3 text-red-900 transition-all hover:brightness-[0.8]">
            Choose file
          </button>
          <p className="text-center text-secondary-300 max-lg:text-sm">
            Anexe seu currículo
          </p>
        </div>
      </div>

      <div className="flex w-1/2 justify-center max-lg:w-full">
        <input
          type="submit"
          value={"Enviar"}
          className="flex h-16 w-full items-center justify-center rounded-md bg-secondary-500 text-sm font-medium text-primaryWhite transition-all hover:brightness-150"
        />
      </div>
    </form>
  )
}
