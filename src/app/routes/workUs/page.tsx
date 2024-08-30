import Image from "next/image"
import tertiaryLogo from "../../../../public/tertiary-logo.svg"
import invertedLogo from "../../../../public/Logo-invertida-godrives.svg"

import location from "../../../../public/Location.svg"
import phone from "../../../../public/Phone.svg"
import email from "../../../../public/Mail_inverse.svg"
import Link from "next/link"
import ContactFormCollaborators from "@/components/contactFormCollaborators/contactForm"

export default function WorkUs() {
  return (
    <main>
      <div className="h-20 w-full bg-secondary-900"></div>
      <div className="flex w-full justify-center bg-secondary-900 px-10 shadow-2xl drop-shadow-xl max-lg:px-0">
        <div className="flex w-full max-w-6xl items-center justify-between gap-4 overflow-hidden max-lg:w-80 max-lg:flex-col max-lg:gap-0 max-lg:pb-5 max-lg:pt-16">
          <div className="flex max-w-3xl flex-col gap-6 max-lg:items-center">
            <Image
              src={tertiaryLogo}
              width={128}
              height={0}
              alt="Logo terciária da godrives"
            />
            <p className="z-10 text-4xl font-semibold text-primaryWhite max-lg:text-center">
              Venha fazer parte da melhor empresa focada em{" "}
              <span className="text-blue">manutenção industrial de Goiás</span>
            </p>
          </div>

          <Image
            src={invertedLogo}
            width={286}
            height={0}
            alt="Logo invertida godrives"
            className="min-w-max opacity-70 max-lg:-mt-24"
          />
        </div>
      </div>
      <div className="my-24 flex flex-col items-center bg-gray-100 px-6 max-lg:px-3">
        <div className="max-w-6xl px-3 max-lg:w-80">
          <h2 className="text-center text-[38px] font-bold leading-10 text-secondary-500">
            Trabalhe conosco
          </h2>
          <p className="my-10 text-center text-base text-secondary-300 max-lg:text-left">
            Na GODRIVES, acreditamos que o nosso maior patrimônio são as pessoas
            que fazem parte da nossa equipe. Estamos sempre em busca de
            profissionais talentosos e dedicados que queiram fazer a diferença.
            Se você é apaixonado por tecnologia, inovação e busca constante por
            excelência, aqui é o lugar certo para você.
          </p>

          <ul className="flex justify-around gap-7 max-lg:flex-col">
            <li className="flex items-center gap-6">
              <Image width={28} height={28} src={location} alt="location svg" />{" "}
              <p className="text-secondary-300">
                R. 42, 2 - QD 64 LT 28 - Cardoso, Aparecida de Goiânia - GO
              </p>
            </li>
            <li className="flex items-center gap-6">
              <Image width={28} height={28} src={phone} alt="Phone svg" />
              <p className="text-secondary-300">+55 62 99881-7695</p>
            </li>
            <li className="flex items-center gap-6">
              <Image width={28} height={28} src={email} alt="Email svg" />{" "}
              <p className="text-secondary-300">comercial@godrives.com.br</p>
            </li>
          </ul>

          <div className="my-14 w-full">
            <div className="mx-auto my-0 h-[2px] max-w-3xl bg-secondary-500" />
          </div>

          <ContactFormCollaborators />
        </div>
      </div>
    </main>
  )
}
