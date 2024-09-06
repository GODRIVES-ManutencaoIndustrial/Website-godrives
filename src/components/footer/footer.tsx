/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image"
import Link from "next/link"
import ArrowContactButton from "../arrowContactButton/arrowContactButton"

export default function Footer() {
  return (
    <div className="w-full bg-secondary-900 px-5 pb-14 pt-20">
      <div className="mx-auto my-0 max-w-7xl max-lg:max-w-lg">
        <div className="flex justify-between gap-6 max-lg:flex-col">
          <div className="flex flex-col gap-1">
            <Image
              src={"/logoMarca.svg"}
              width={188}
              height={0}
              // className="min-w-max opacity-80 mix-blend-overlay"
              alt="Logo marca GODRIVES"
            />
            <p className="text-xl font-medium text-primaryWhite">
              Manutenção em equipamentos{" "}
              <span className="text-red">eletrônicos industrais</span>
            </p>
          </div>
          <ArrowContactButton />
        </div>
        <div className="my-16 h-px w-full bg-[#0c8cbf]" />
        <div className="flex justify-between gap-9 px-6 max-md:flex-col">
          <div className="flex flex-col gap-2 text-secondary-200">
            <p>Siga as nossas redes sociais</p>
            <ul className="flex">
              <li className="flex items-center justify-between gap-3">
                <Link href={"https://www.instagram.com/go.drives/"}>
                  <Image
                    src={"/instagram.png"}
                    width={40}
                    height={40}
                    // className="min-w-max opacity-80 mix-blend-overlay"
                    alt="Ícone link Instagram"
                  />
                </Link>

                <Link
                  href={
                    " https://www.linkedin.com/company/go-drives/posts/?feedView=all"
                  }
                >
                  <Image
                    src={"/Linkedin.png"}
                    width={40}
                    height={40}
                    // className="min-w-max opacity-80 mix-blend-overlay"
                    alt="Ícone link Linkedin"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-8 max-md:flex-col">
            <Link
              href={"/"}
              className="text-sm font-bold text-blue transition-all hover:brightness-150"
            >
              Início
            </Link>
            <Link
              href={"/servicos"}
              className="text-sm font-bold text-blue transition-all hover:brightness-150"
            >
              Serviços
            </Link>
            <Link
              href={"/workUs"}
              className="text-sm font-bold text-blue transition-all hover:brightness-150"
            >
              Trabalhe Conosco
            </Link>
          </div>
        </div>
        <div className="my-16 h-px w-full bg-[#0c8cbf]" />
        <div className="flex flex-col justify-center gap-2 text-center text-sm text-secondary-200">
          <p>©2024 - GODRIVES | Todos os direitos reservardos</p>
          <p className="text-xs opacity-70">
            Desenvolvido por Gabriel Manicucci
          </p>
        </div>
      </div>
    </div>
  )
}
