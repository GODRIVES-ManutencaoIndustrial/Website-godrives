/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image"
import Link from "next/link"
import ArrowContactButton from "../arrowContactButton/arrowContactButton"
import location from "../../../public/Location.svg"
import phone from "@/../public/Phone.svg"
import email from "@/../public/Mail_inverse.svg"
import { FaYoutube } from "react-icons/fa"

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
              Manutenção de equipamentos{" "}
              <span className="text-red">eletrônicos industrais</span>
            </p>
          </div>
          <ArrowContactButton />
        </div>
        <div className="my-16 h-px w-full bg-[#0c8cbf]" />
        <div className="flex justify-between gap-16 max-md:flex-col">
          <div className="flex flex-col gap-2 text-secondary-50">
            <p className="text-lg">Siga as nossas redes sociais</p>
            <ul className="flex">
              <li className="flex items-center justify-between gap-5">
                <Link href={"https://www.instagram.com/go.drives/"}>
                  <Image
                    src={"/instagram.png"}
                    width={40}
                    height={40}
                    alt="Ícone link Instagram"
                  />
                </Link>

                <Link
                  href={
                    "https://www.linkedin.com/company/go-drives/posts/?feedView=all"
                  }
                >
                  <Image
                    src={"/Linkedin.png"}
                    width={40}
                    height={40}
                    alt="Ícone link Linkedin"
                  />
                </Link>

                <Link href={" https://www.youtube.com/@GODrives/videos"}>
                  <FaYoutube size={36} />
                </Link>
              </li>
            </ul>
          </div>
          <ul className="flex flex-col gap-7 text-sm">
            <li className="flex items-center gap-6">
              <Image width={24} height={24} src={location} alt="location svg" />{" "}
              <p className="text-secondary-50">
                Rua. 42 - QD 64 - LT 24 - Cardoso Continuação, Aparecida de
                Goiânia - GO
              </p>
            </li>
            <li className="flex items-center gap-6">
              <Image width={24} height={24} src={phone} alt="Phone svg" />
              <p className="text-secondary-50">+55 62 99881-7695</p>
            </li>
            <li className="flex items-center gap-6">
              <Image width={24} height={24} src={email} alt="Email svg" />{" "}
              <p className="text-secondary-50">comercial@godrives.com.br</p>
            </li>
          </ul>
          <div className="flex gap-6 max-md:flex-col lg:gap-8">
            <Link
              href={"/"}
              className="text-sm font-bold text-blue transition-all hover:brightness-150"
            >
              Início
            </Link>

            <Link
              href={"/workUs"}
              className="text-sm font-bold text-blue transition-all hover:brightness-150"
            >
              Serviços
            </Link>
            <div>
              <h4 className="mb-3 text-sm font-bold text-blue transition-all hover:brightness-150">
                Empresa
              </h4>
              <ul className="flex flex-col items-start gap-2 text-xs text-secondary-50">
                <Link
                  className="cursor-pointer hover:text-blue"
                  href={"/#about"}
                >
                  Sobre Nós
                </Link>
                <Link
                  className="cursor-pointer hover:text-blue"
                  href={"/#contact"}
                >
                  Contato
                </Link>
                <Link
                  className="cursor-pointer hover:text-blue"
                  href={"/trabalheConosco"}
                >
                  Trabalhe Conosco
                </Link>
                <Link className="cursor-pointer hover:text-blue" href={"#FAQ"}>
                  Perguntas Frequentes
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-16 h-px w-full bg-[#0c8cbf]" />
        <div className="flex flex-col justify-center gap-2 text-center text-sm text-secondary-200">
          <p>©2024 - GODRIVES | Todos os direitos reservardos</p>
          <p className="text-xs opacity-70">
            Desenvolvido por Gabriel Manicucci
            <span className="ml-3">-</span>
            <Link
              href={"https://www.linkedin.com/in/gabriel-manicucci/"}
              className="ml-3 cursor-pointer font-semibold text-blue transition-all hover:text-secondary-50"
            >
              Saiba Mais
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
