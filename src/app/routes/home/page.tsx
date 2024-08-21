import Hero from "@/components/heroBackground/heroBackground"
import Image from "next/image"
import marca from "../../../../public/marca.svg"
import ilustration from "../../../../public/ilustration.svg"
import location from "../../../../public/Location.svg"
import phone from "../../../../public/Phone.svg"
import email from "../../../../public/Mail_inverse.svg"
import equipe from "../../../../public/EquipeGODRIVES.png"
import Carousel from "@/components/carousel/carousel"
import Card from "@/components/card/card"
import CarouselProcess from "@/components/carouselProcess/carouselProcess"
import ArrowContactButton from "@/components/arrowContactButton/arrowContactButton"
import Link from "next/link"
import ContactForm from "@/components/contactForm/contactForm"
import { ArrowBigDown } from "lucide-react"
import GoogleMap from "@/components/googleMap/googleMap"
export default function Home() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  return (
    <div>
      <div className="bg-secondary-900 absolute left-0 top-0 -z-10 flex h-screen w-full items-center justify-center overflow-hidden">
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
              <span className="text-blue text-xl font-bold">GO</span>
              <span className="text-red text-xl font-bold">DRIVES</span>
            </p>
          </div>
          <p className="mt-5 text-center text-3xl font-semibold text-primaryWhite sm:text-4xl">
            Manutenção em equipamentos{" "}
            <span className="text-blue">eletrônicos industriais</span>{" "}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="hover:text-backgroundBlue bg-transparent hover:text-secondary-900 rounded-3xl border-2 border-primaryWhite px-7 py-3 font-medium text-primaryWhite transition-all hover:bg-primaryWhite">
              Leia mais
            </button>

            <Link href="https://wa.me/5562998817695" target="_blank">
              <button className="hover:text-backgroundBlue bg-transparent border-blue text-blue hover:bg-blue hover:text-secondary-900 rounded-3xl border-2 px-7 py-3 font-medium transition-all">
                Contate-nos
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-3 py-28 shadow-xl min-[800px]:grid">
        <div className="mb-7 flex flex-col gap-7">
          <div>
            <p className="text-secondary-500 text-[38px] font-bold leading-10">
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
            <p className="text-secondary-300 text-xl">
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
            <div className="border-gray-400 flex h-[100px] w-36 flex-1 flex-col items-center border-l border-r">
              <p className="text-blue w-20 text-center text-[40px] font-semibold">
                2
              </p>
              <p className="text-secondary-300 w-20 text-center text-sm">
                Unidades
              </p>
            </div>
            <div className="border-gray-400 flex h-[100px] w-36 flex-1 flex-col items-center border-r">
              <p className="text-blue w-20 text-center text-[40px] font-semibold">
                +10
              </p>
              <p className="text-secondary-300 w-20 text-center text-sm">
                Anos de mercado
              </p>
            </div>
          </div>
          <div className="flex w-full items-center">
            <div className="border-gray-400 flex w-36 flex-1 flex-col items-center border-r max-md:border-l">
              <p className="text-blue w-20 text-center text-[40px] font-semibold">
                +50
              </p>
              <p className="text-secondary-300 w-20 text-center text-sm">
                Empresas Atendidas
              </p>
            </div>
            <div className="border-gray-400 flex w-36 flex-1 flex-col items-center border-r">
              <p className="text-blue w-20 text-center text-[40px] font-semibold">
                +10
              </p>
              <p className="text-secondary-300 w-20 text-center text-sm">
                Especialistas disponíveis
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-14">
        <div className="mb-12 flex flex-col gap-1">
          <p className="text-red">Serviços</p>
          <h2 className="text-secondary-500 text-4xl font-bold">
            Como podemos solucionar o seu serviço ?
          </h2>
        </div>

        <Card />
      </div>

      <div className="px-3 py-14">
        <div className="mb-12 flex flex-col gap-2">
          <p className="text-red">Processos</p>
          <h2 className="text-secondary-500 text-4xl font-bold">
            Saiba mais sobre nosso trabalho
          </h2>
          <p className="text-secondary-300 text-xl">
            Nosso processo de trabalho foi pensado para conseguir entregar o
            melhor resultado para o cleinte, desde o reconhecimento até a
            entrega da solução
          </p>
        </div>

        <CarouselProcess />
      </div>

      <div className="bg-secondary-900 mb-3 flex w-full items-center justify-center px-14 py-24 max-xl:px-0 max-lg:flex-col max-lg:gap-2 max-lg:overflow-hidden">
        <div className="z-10 w-[60%] px-10 max-xl:w-full max-lg:px-6">
          <h1 className="text-left text-4xl font-semibold leading-10 text-primaryWhite max-lg:text-center max-lg:leading-[50px]">
            A manutenção que você precisa{" "}
            <span className="text-blue">em um só lugar</span>{" "}
          </h1>
        </div>
        <div className="relative flex w-[40%] items-center justify-center max-xl:w-full">
          <Image
            src={ilustration}
            width={449}
            height={437}
            alt="ilustração da marca"
            className="left-0 top-0 h-[520px] w-[550px] animate-spin-slow opacity-90 max-xl:h-[437px] max-xl:w-[449px]"
          />

          <Link
            href="https://wa.me/5562998817695"
            target="_blank"
            className="absolute z-10 flex h-[64px] w-64 items-center"
          >
            <button className="border-blue bg-blue text-blue-900 hover:fill-blue hover:text-blue fill-secondary-900 hover:bg-secondary-900 absolute flex h-full w-full items-center justify-center gap-5 rounded-[28px] border-2 text-xl shadow-2xl drop-shadow-3xl transition-all">
              Contate-nos
            </button>
          </Link>
        </div>
      </div>

      <div className="px-5 pb-24 pt-16">
        <h2 className="text-secondary-500 mb-9 text-center text-4xl font-bold">
          Conheça nossa empresa
        </h2>
        <video
          autoPlay
          controls
          muted
          className="border-gray-200 mb-20 h-[500px] w-full rounded-xl border shadow-xl"
        >
          <source src="/institutionalVideo.mp4" type="video/mp4" />
        </video>

        <div className="mb-10">
          <div className="mb-12 flex flex-col gap-5">
            <div className="flex gap-2 max-lg:flex-col">
              <p className="text-red">Contato</p>
              <h2 className="text-secondary-500 text-4xl font-bold">
                Entre em contato
              </h2>
            </div>

            <p className="text-secondary-300 text-xl">
              Nossa equipe de atendimento ao cliente está disponível para
              responder às suas perguntas e fornecer o suporte necessário.
            </p>
          </div>

          <ul className="flex flex-col gap-7">
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
              <p className="text-secondary-300">adm@godrives.com.br</p>
            </li>
          </ul>

          <div className="bg-secondary-500 my-12 h-[2px] w-full" />

          <div className="flex flex-col gap-5">
            <h3 className="text-secondary-500 text-2xl font-bold">Unidades</h3>
            <div className="flex flex-col gap-2">
              <h4 className="text-blue text-[17px] font-extrabold">
                MT<span className="text-red">DRIVES</span>
              </h4>

              <Link
                className="bg-gray-200 border-secondary-50 last:text-secondary-500 flex items-center gap-6 rounded-2xl border p-3 shadow transition-all hover:cursor-pointer hover:brightness-90"
                href={"https://mtdrives.com.br/"}
                target="_blanck"
                title="Visite https://mtdrives.com.br"
              >
                <Image
                  width={28}
                  height={28}
                  src={location}
                  alt="location svg"
                />{" "}
                <p>Mato Grosso - Rua Ipê, 01 - Jardim Imperial II, Cuiabá</p>
              </Link>
            </div>
          </div>
        </div>

        <ContactForm />

        <GoogleMap apiKey={apiKey} />
      </div>
    </div>
  )
}
