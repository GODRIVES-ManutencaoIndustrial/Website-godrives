import Hero from "../../components/heroBackground/heroBackground"
import Image from "next/image"
import marca from "@/../public/marca.svg"
import ilustration from "@/../public/ilustration.svg"
import location from "../../../public/Location.svg"
import phone from "@/../public/Phone.svg"
import email from "@/../public/Mail_inverse.svg"
import equipe from "@/../public/EquipeGODRIVES.png"
import equipeGodrives from "@/../public/EquipeGODRIVESCortada.png"
import equipeGodrivesEdited from "@/../public/EquipeGODRIVESEdited.png"
import Carousel from "@/components/carousel/carousel"
import Card from "@/components/card/card"
import CarouselProcess from "@/components/carouselProcess/carouselProcess"
import Link from "next/link"
import ContactForm from "@/components/contactForm/contactForm"
import GoogleMap from "@/components/googleMap/googleMap"
import { Motion } from "@/components/motion/motion"
import Brands from "@/components/brands/brands"

export default function Home() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  const url = process.env.URL

  return (
    <div className="overflow-hidden">
      <div className="absolute left-0 top-0 -z-10 flex h-[58.25rem] w-full items-center justify-center overflow-hidden bg-secondary-900 lg:h-screen">
        <Hero />
      </div>

      <div className="my-0 h-[58.25rem] w-full px-10 shadow-2xl drop-shadow-xl max-lg:px-0 lg:h-screen">
        <div className="relative top-1/4 mx-auto my-0 mb-24 max-lg:w-80 lg:top-1/2 lg:mb-32 lg:-translate-y-1/2">
          <div className="flex flex-col items-center gap-3">
            <Motion
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              children={
                <Image
                  src={"/logo.svg"}
                  alt="logo GODRIVES"
                  width={48}
                  height={48}
                />
              }
            />

            <Motion
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 0.6, delay: 0.6 }}
              className="text-center text-base text-primaryWhite md:text-lg"
              children={
                <p>
                  Seja bem vindo a{" "}
                  <span className="text-xl font-bold text-blue">GO</span>
                  <span className="text-xl font-bold text-red">DRIVES</span>
                </p>
              }
            />
          </div>

          <Motion
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.6, delay: 1 }}
            children={
              <>
                <p className="mt-5 text-center text-3xl font-semibold text-primaryWhite sm:text-4xl">
                  Manutenção de equipamentos{" "}
                  <span className="text-blue">eletrônicos industriais</span>{" "}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 lg:flex-row">
                  <Link
                    href={"#about"}
                    className="hover:text-backgroundBlue bg-transparent rounded-3xl border-2 border-primaryWhite px-7 py-3 font-medium text-primaryWhite transition-all hover:bg-primaryWhite hover:text-secondary-900"
                  >
                    Saiba mais
                  </Link>

                  <Link href="https://wa.me/5562998817695" target="_blank">
                    <button className="hover:text-backgroundBlue bg-transparent rounded-3xl border-2 border-blue px-7 py-3 font-medium text-blue transition-all hover:bg-blue hover:text-secondary-900">
                      Fale Conosco
                    </button>
                  </Link>
                </div>
              </>
            }
          />
        </div>

        <div className="relative top-1/4 lg:top-[38%]">
          <Motion
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.6, delay: 1.5 }}
            children={
              <>
                <h2 className="mb-7 text-center text-xl font-normal text-red">
                  Marcas atendidas
                </h2>
                <div className="relative flex overflow-hidden">
                  <Brands />
                </div>
              </>
            }
          />
        </div>
      </div>

      <div
        id="about"
        className="flex w-full justify-center bg-gray-50 px-3 py-28 shadow-xl lg:px-10"
      >
        <Motion
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          children={
            <div className="max-w-6xl max-lg:w-80">
              <div className="mb-7 grid grid-cols-2 max-lg:flex max-lg:flex-col max-lg:gap-7 lg:gap-3 min-[1056px]:gap-8 xl:gap-12">
                <div className="flex flex-col gap-6 xl:gap-8">
                  <div>
                    <p className="text-red">Sobre</p>
                    <h2 className="text-[38px] font-bold leading-10 text-secondary-500">
                      Bem vindo a{" "}
                      <Image
                        src={marca}
                        width={170}
                        alt="marca GODRIVES"
                        className="mt-1"
                      />
                    </h2>
                  </div>

                  <p className="text-lg text-secondary-300 lg:text-base xl:text-lg">
                    Fundada em 2013, a GO Drives é um pilar de excelência no
                    setor de manutenção eletrônica industrial de Goiás. Com sede
                    em Aparecida de Goiânia - GO, nossa empresa se dedica a
                    fornecer serviços especializados de manutenção, reparo e
                    atualização de equipamentos eletrônicos industriais,
                    garantindo a máxima eficiência, produtividade e qualidade
                    para os clientes nos setores abaixo:
                  </p>
                </div>
                <div className="row-span-2 lg:min-w-[488px]">
                  <Image
                    src={equipeGodrivesEdited}
                    width={0}
                    alt="Equipe GODRIVES"
                    className="rounded-lg"
                  />
                </div>
                <Carousel />
              </div>

              <div className="mt-12 flex items-center px-6 max-lg:flex-col max-lg:gap-16 max-md:gap-10">
                <div className="max-w flex w-full items-center">
                  <div className="flex h-[100px] w-36 flex-1 flex-col items-center border-l border-r border-gray-400">
                    <p className="w-20 text-center text-[40px] font-semibold text-blue">
                      2
                    </p>
                    <p className="w-20 text-center text-sm text-secondary-300">
                      Unidades
                    </p>
                  </div>
                  <div className="flex h-[100px] w-36 flex-1 flex-col items-center border-r border-gray-400">
                    <p className="w-20 text-center text-[40px] font-semibold text-blue">
                      +10
                    </p>
                    <p className="w-20 text-center text-sm text-secondary-300">
                      Anos de mercado
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center">
                  <div className="flex w-36 flex-1 flex-col items-center border-r border-gray-400 max-lg:border-l">
                    <p className="w-20 text-center text-[40px] font-semibold text-blue">
                      +50
                    </p>
                    <p className="w-20 text-center text-sm text-secondary-300">
                      Empresas Atendidas
                    </p>
                  </div>
                  <div className="flex w-36 flex-1 flex-col items-center border-r border-gray-400">
                    <p className="w-20 text-center text-[40px] font-semibold text-blue">
                      +10
                    </p>
                    <p className="w-20 text-center text-sm text-secondary-300">
                      Especialistas disponíveis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>

      <Motion
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex w-full justify-center px-3 py-14 lg:px-10"
        children={
          <div>
            <div className="max-w-6xl max-lg:w-80">
              <div className="mb-12 flex flex-col gap-1">
                <p className="text-red">Serviços</p>
                <h2 className="text-4xl font-bold text-secondary-500">
                  Como podemos solucionar o seu problema ?
                </h2>
              </div>

              <Card />
            </div>
          </div>
        }
      />

      <div className="w-full px-3 py-14 lg:px-10">
        <Motion
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mx-auto my-0 max-w-6xl max-lg:w-80"
          children={
            <div>
              <div className="mb-9 flex flex-col gap-2">
                <p className="text-red">Processos</p>
                <h2 className="text-4xl font-bold text-secondary-500">
                  Saiba mais sobre nosso trabalho
                </h2>
                <p className="text-xl text-secondary-300">
                  Nosso processo de trabalho foi pensado para conseguir entregar
                  o melhor resultado para a sua empresa, desde o reconhecimento
                  até a entrega da solução
                </p>
              </div>

              <CarouselProcess />
            </div>
          }
        />
      </div>

      <div className="flex w-full justify-center bg-secondary-900">
        <Motion
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-3 flex max-w-7xl flex-row items-center justify-center px-3 py-24 max-xl:px-3 max-lg:w-[31rem] max-lg:flex-col max-lg:gap-2 max-lg:overflow-hidden"
          children={
            <>
              <div className="z-10 w-[60%] px-10 max-xl:w-full max-lg:px-0">
                <h1 className="text-left text-4xl font-semibold leading-10 text-primaryWhite max-lg:text-center max-lg:leading-[50px]">
                  A manutenção que você precisa{" "}
                  <span className="text-blue">em um só lugar</span>{" "}
                </h1>
              </div>
              <div className="relative flex w-[40%] items-center justify-center overflow-hidden max-xl:w-full">
                <Image
                  src={ilustration}
                  width={449}
                  height={437}
                  alt="ilustração da marca"
                  className="left-0 top-0 h-[520px] w-[550px] animate-spin-slow overflow-hidden opacity-90 max-xl:h-[437px] max-xl:w-[449px]"
                />

                <Link
                  href="https://wa.me/5562998817695"
                  target="_blank"
                  className="absolute z-10 flex h-[64px] w-64 items-center"
                >
                  <button className="absolute flex h-full w-full items-center justify-center gap-5 rounded-[28px] border-2 border-blue bg-blue fill-secondary-900 text-xl text-blue-900 shadow-2xl drop-shadow-3xl transition-all hover:bg-secondary-900 hover:fill-blue hover:text-blue">
                    Fale Conosco
                  </button>
                </Link>
              </div>
            </>
          }
        />
      </div>

      <div className="flex w-full justify-center px-3 pb-16 pt-20 lg:px-10">
        <div className="w-full max-w-6xl max-lg:w-80">
          <Motion
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            children={
              <>
                <h2 className="mb-9 text-center text-4xl font-bold text-secondary-500">
                  Conheça nossa empresa
                </h2>
                <video
                  autoPlay
                  controls
                  muted
                  className="h-[500px] w-full rounded-xl border border-gray-200 shadow-xl"
                >
                  <source src="/institutionalVideo.mp4" type="video/mp4" />
                </video>
              </>
            }
          />
          <Motion
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-between gap-16 pt-24 max-lg:flex-col"
            id="contact"
            children={
              <>
                <div className="lg:min-w-[545px]">
                  <div className="mb-12 flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <p className="text-red">Contato</p>
                      <h2 className="text-4xl font-bold text-secondary-500">
                        Entre em contato
                      </h2>
                    </div>

                    <p className="text-xl text-secondary-300">
                      Nossa equipe de atendimento ao cliente está disponível
                      para responder às suas perguntas e fornecer o suporte
                      necessário.
                    </p>
                  </div>

                  <ul className="flex flex-col gap-7">
                    <li className="flex items-center gap-6">
                      <Image
                        width={28}
                        height={28}
                        src={location}
                        alt="location svg"
                      />{" "}
                      <p className="text-secondary-300">
                        Rua. 42 - QD 64 - LT 28 - Cardoso Continuação, Aparecida
                        de Goiânia - GO
                      </p>
                    </li>
                    <li className="flex items-center gap-6">
                      <Image
                        width={28}
                        height={28}
                        src={phone}
                        alt="Phone svg"
                      />
                      <p className="text-secondary-300">+55 62 99881-7695</p>
                    </li>
                    <li className="flex items-center gap-6">
                      <Image
                        width={28}
                        height={28}
                        src={email}
                        alt="Email svg"
                      />{" "}
                      <p className="text-secondary-300">
                        comercial@godrives.com.br
                      </p>
                    </li>
                  </ul>

                  <div className="my-12 h-[2px] w-full bg-secondary-500" />

                  <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-bold text-secondary-500">
                      Unidades
                    </h3>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[17px] font-extrabold text-blue">
                        MT<span className="text-red">DRIVES</span>
                      </h4>

                      <Link
                        className="flex items-center gap-6 rounded-2xl border border-secondary-50 bg-gray-200 p-3 shadow transition-all last:text-secondary-500 hover:cursor-pointer hover:brightness-90"
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
                        <p>
                          Mato Grosso - Rua Ipê, 01 - Jardim Imperial II, Cuiabá
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>

                <ContactForm url={url} />
              </>
            }
          />
        </div>
      </div>

      <div className="flex justify-center px-2 pb-28 lg:px-10">
        <Motion
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full max-w-lg lg:max-w-7xl"
          children={
            <div>
              <h2 className="mb-8 text-center text-2xl font-bold text-secondary-500">
                Localização
              </h2>
              <GoogleMap apiKey={apiKey} />
            </div>
          }
        />
      </div>
    </div>
  )
}
