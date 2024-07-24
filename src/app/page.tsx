import Hero from "@/components/Hero/hero"
import Serviços from "./routes/servicos/page"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <div className="bg-secondary900 absolute left-0 top-0 -z-10 flex h-screen w-full items-center justify-center overflow-hidden">
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
            <p className="text-primaryWhite text-center text-base md:text-lg">
              Seja bem vindo a{" "}
              <span className="text-primaryBlue text-xl font-bold">GO</span>
              <span className="text-primaryRed text-xl font-bold">DRIVES</span>
            </p>
          </div>
          <p className="text-primaryWhite mt-5 text-center text-3xl font-semibold sm:text-4xl">
            Manutenção em equipamentos{" "}
            <span className="text-primaryBlue">eletrônicos industriais</span>{" "}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="border-primaryWhite text-primaryWhite hover:bg-primaryWhite hover:text-backgroundBlue rounded-3xl border-2 bg-transparent px-7 py-3 font-medium transition-all">
              Leia mais
            </button>
            <button className="border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-backgroundBlue rounded-3xl border-2 bg-transparent px-7 py-3 font-medium transition-all">
              Contate-nos
            </button>
          </div>
        </div>
      </div>

      {/* <div className="h-[650px] w-full bg-white">Teste</div>
      <div className="h-[650px] w-full bg-white">Teste</div>

      <div className="h-[650px] w-full bg-white">Teste</div> */}
    </>
  )
}
