import Image from "next/image"
import tertiaryLogo from "@/../public/tertiary-logo.svg"
import invertedLogo from "@/../public/Logo-invertida-godrives.svg"
import CardServices from "@/components/cardServices/cardServices"
import { Motion } from "@/components/motion/motion"

export default function Serviços() {
  return (
    <main className="">
      <div className="h-20 w-full bg-secondary-900"></div>
      <div className="flex w-full justify-center bg-secondary-900 px-10 shadow-2xl drop-shadow-xl max-lg:px-0">
        <div className="flex w-full max-w-6xl items-center justify-between gap-4 overflow-hidden max-lg:w-80 max-lg:flex-col max-lg:gap-0 max-lg:pb-5 max-lg:pt-16">
          <Motion
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            children={
              <div className="flex max-w-3xl flex-col gap-6 max-lg:items-center">
                <Image
                  src={tertiaryLogo}
                  width={128}
                  height={0}
                  alt="Logo terciária da godrives"
                />
                <p className="z-10 text-4xl font-semibold text-primaryWhite max-lg:text-center">
                  Garantimos manutenção industrial eletrônica{" "}
                  <span className="text-blue">
                    ágil e precisa do seus equipamentos.
                  </span>
                </p>
              </div>
            }
          />

          <Motion
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            children={
              <Image
                src={invertedLogo}
                width={286}
                height={0}
                alt="Logo invertida godrives"
                className="min-w-max opacity-70 max-lg:-mt-24"
              />
            }
          />
        </div>
      </div>

      <div className="my-24 flex flex-col items-center bg-gray-100 px-10">
        <Motion
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          children={
            <div className="max-w-6xl max-lg:w-80">
              <h2 className="text-center text-[38px] font-bold leading-10 text-secondary-500">
                Saiba mais sobre os nossos serviços
              </h2>

              <CardServices />
            </div>
          }
        />
      </div>
    </main>
  )
}
