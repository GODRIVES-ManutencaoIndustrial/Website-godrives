"use client"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import InputMask from "react-input-mask"
import {
  contactFormCollaboratorsSchema,
  TypeContactFormCollaboratorsSchema,
} from "./contactFormCollaborators.schema"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { LoaderCircle } from "lucide-react"

type ContactFormCollaboratorsProps = {
  url: string | undefined
}

export default function ContactFormCollaborators({
  url,
}: ContactFormCollaboratorsProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TypeContactFormCollaboratorsSchema>({
    resolver: zodResolver(contactFormCollaboratorsSchema),
  })

  const [loading, setLoading] = useState<boolean>()
  const { toast } = useToast()

  const onSubmit = async (data: TypeContactFormCollaboratorsSchema) => {
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("number", data.number)
    formData.append("email", data.email)
    formData.append("vaga", data.vaga)
    formData.append("textarea", data.textarea)

    if (data.file && data.file.length > 0) {
      formData.append("file", data.file[0])
    }

    setLoading(true)
    try {
      const response = await fetch(`${url}/api/sendEmail/workUs`, {
        method: "POST",
        body: formData,
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
            <InputMask
              {...register("number")}
              mask="(99) 99999-9999"
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
        </div>

        <div className="flex w-1/2 flex-col gap-5 max-lg:w-full">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-secondary-300" htmlFor="vaga">
              Área de interesse
            </label>
            <input
              {...register("vaga")}
              type="text"
              id="email"
              placeholder="Vaga de interesse..."
              className="h-16 rounded-md border border-secondary-50 px-3 text-secondary-300 placeholder:brightness-125"
            />
            {errors.vaga && (
              <span className="text-sm text-red-600">
                {errors.vaga?.message}
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
              className="h-44 rounded-md border border-secondary-50 px-3 py-3 text-secondary-300 placeholder:brightness-125"
            />
            {errors.textarea && (
              <span className="text-sm text-red-600">
                {errors.textarea?.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="my-7 flex w-full justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-3 lg:flex-row">
          <input
            className="w-64 transition-all file:rounded-xl file:border-none file:bg-red file:px-4 file:py-3 file:text-red-900 file:hover:brightness-[0.8]"
            type="file"
            accept=".pdf"
            id="file"
            {...register("file")}
          />
          {errors.file && (
            <span className="text-sm text-red-600">{errors.file?.message}</span>
          )}
          <label className="text-center text-secondary-300 max-lg:text-sm">
            Anexe seu currículo PDF
          </label>
        </div>
      </div>

      <button
        type="submit"
        className={`inline-flex h-16 w-full items-center justify-center rounded-md bg-secondary-500 text-sm font-medium text-primaryWhite transition-all hover:brightness-150 lg:w-1/2 ${loading ? "brightness-150" : ""}`}
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
