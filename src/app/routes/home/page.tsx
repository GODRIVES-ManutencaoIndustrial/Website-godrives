import Hero from "@/components/heroBackground/heroBackground"
import Image from "next/image"
import marca from "../../../../public/marca.svg"
import equipe from "../../../../public/equipeGODRIVES.png"
import Carousel from "@/components/carousel/carousel"
import Card from "@/components/card/card"
import CarouselProcess from "@/components/carouselProcess/carouselProcess"

export default function Home() {
  return (
    <div>
      <div className="absolute left-0 top-0 -z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-secondary900">
        <Hero />
      </div>

      <div className="my-0 flex h-screen w-full items-center justify-center px-4">
        <div className="">
          <div className="flex flex-col items-center gap-3">
            <Image
              src={"/logo.svg"}
              alt="logo GODRIVES"
              width={48}
              height={48}
            />
            <p className="text-center text-base text-primaryWhite md:text-lg">
              Seja bem vindo a{" "}
              <span className="text-xl font-bold text-primaryBlue">GO</span>
              <span className="text-xl font-bold text-primaryRed">DRIVES</span>
            </p>
          </div>
          <p className="mt-5 text-center text-3xl font-semibold text-primaryWhite sm:text-4xl">
            Manutenção em equipamentos{" "}
            <span className="text-primaryBlue">eletrônicos industriais</span>{" "}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="hover:text-backgroundBlue bg-transparent rounded-3xl border-2 border-primaryWhite px-7 py-3 font-medium text-primaryWhite transition-all hover:bg-primaryWhite hover:text-secondary900">
              Leia mais
            </button>
            <button className="hover:text-backgroundBlue bg-transparent rounded-3xl border-2 border-primaryBlue px-7 py-3 font-medium text-primaryBlue transition-all hover:bg-primaryBlue hover:text-secondary900">
              Contate-nos
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray50 px-3 py-28 shadow-xl min-[800px]:grid">
        <div className="mb-7 flex flex-col gap-7">
          <div>
            <p className="text-[38px] font-semibold leading-10 text-secondary500">
              Seja muito bem vindo a{" "}
              <Image
                src={marca}
                width={170}
                alt="marca GODRIVES"
                className="mt-2"
              />
            </p>
          </div>
          <div>
            <Image
              src={equipe}
              width={700}
              alt="Equipe GODRIVES"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-xl text-secondary300">
              Fundada em 2013, a GODRIVES tem sido um pilar de excelência no
              setor de manutenção eletrônica industrial de Goiás. Com sede em
              Aparecida de Goiânia GO, nossa empresa se dedica a fornecer
              serviços especializados de manutenção, reparo e atualização de
              equipamentos eletrônicos industriais, garantindo a máxima
              eficiência e produtividade para nossos clientes dos seguintes
              setores:
            </p>
          </div>
        </div>
        <Carousel />

        <div className="mt-12 flex items-center px-6 max-md:flex-col max-md:gap-10 max-sm:gap-16">
          <div className="max-w flex w-full items-center">
            <div className="flex h-[100px] w-36 flex-1 flex-col items-center border-l border-r border-gray400">
              <p className="w-20 text-center text-[40px] font-semibold text-primaryBlue">
                2
              </p>
              <p className="w-20 text-center text-sm text-secondary300">
                Unidades
              </p>
            </div>
            <div className="flex h-[100px] w-36 flex-1 flex-col items-center border-r border-gray400">
              <p className="w-20 text-center text-[40px] font-semibold text-primaryBlue">
                +10
              </p>
              <p className="w-20 text-center text-sm text-secondary300">
                Anos de mercado
              </p>
            </div>
          </div>
          <div className="flex w-full items-center ">
            <div className="flex w-36 flex-1 flex-col items-center border-r border-gray400 max-md:border-l">
              <p className="w-20 text-center text-[40px] font-semibold text-primaryBlue">
                +50
              </p>
              <p className="w-20 text-center text-sm text-secondary300">
                Empresas Atendidas
              </p>
            </div>
            <div className="flex w-36 flex-1 flex-col items-center border-r border-gray400">
              <p className="w-20 text-center text-[40px] font-semibold text-primaryBlue">
                +10
              </p>
              <p className="w-20 text-center text-sm text-secondary300">
                Especialistas disponíveis
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-14">
        <div className="mb-12 flex flex-col gap-1">
          <p className="text-primaryRed">Serviços</p>
          <h2 className="text-4xl font-semibold text-secondary500">
            Como podemos solucionar o seu serviço ?
          </h2>
        </div>

        <Card />
      </div>

      <div className="px-3 py-14">
        <div className="mb-12 flex flex-col gap-2">
          <p className="text-primaryRed">Processos</p>
          <h2 className="text-4xl font-semibold text-secondary500">
            Saiba mais sobre nosso trabalho
          </h2>
          <p className="text-xl text-secondary300">
            Nosso processo de trabalho foi pensado para conseguir entregar o
            melhor resultado para o cleinte, desde o reconhecimento até a
            entrega da solução
          </p>
        </div>

        <CarouselProcess />
      </div>
    </div>
  )
}
