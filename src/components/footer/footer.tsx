import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="w-full bg-secondary900 px-5 pb-14 pt-16">
      <div className="">
        <div className="mb-5 flex flex-col gap-1">
          <Image
            src={"/logoMarca.svg"}
            width={188}
            height={0}
            // className="min-w-max opacity-80 mix-blend-overlay"
            alt="Logo marca GODRIVES"
          />
          <p className="text-xl font-medium text-primaryWhite">
            Manutenção em equipamentos{" "}
            <span className="text-primaryRed">eletrônicos industrais</span>
          </p>
        </div>
        <button className="inline-flex h-[56px] items-center justify-center gap-6 rounded-[28px] bg-primaryBlue px-10 py-3">
          <p className="font-['Poppins'] text-xl font-normal text-blue900">
            Contate-nos
          </p>
          <Image
            src={"/Arrow.svg"}
            width={27}
            height={0}
            alt="Logo marca GODRIVES"
          />
        </button>
      </div>
      <div className="my-14 h-px w-full bg-[#0c8cbf]" />
      <div className="flex flex-col gap-4 px-6">
        <div className="flex flex-col gap-2 text-secondary200">
          <p>Siga as nossas redes sociais</p>
          <ul className="flex">
            <li className="flex items-center justify-between gap-3">
              <Image
                src={"/Facebook.png"}
                width={40}
                height={40}
                // className="min-w-max opacity-80 mix-blend-overlay"
                alt="Ícone link Facebook"
              />
              <Image
                src={"/instagram.png"}
                width={40}
                height={40}
                // className="min-w-max opacity-80 mix-blend-overlay"
                alt="Ícone link Instagram"
              />
              <Image
                src={"/Linkedin.png"}
                width={40}
                height={40}
                // className="min-w-max opacity-80 mix-blend-overlay"
                alt="Ícone link Linkedin"
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href={"/"}
            className="text-sm font-bold text-primaryBlue transition-all hover:brightness-150"
          >
            Início
          </Link>
          <Link
            href={"/routes/servicos"}
            className="text-sm font-bold text-primaryBlue transition-all hover:brightness-150"
          >
            Serviços
          </Link>

          <div className="flex flex-col">
            <p className="text-sm font-bold text-primaryBlue transition-all hover:brightness-150">
              <a href="/routes/empresa">Empresa</a>
            </p>
            <Link
              href={"/"}
              content="Sobre Nós"
              className="text-secondary200"
            />
            <Link href={"/"} content="Contatos" className="text-secondary200" />
            <Link
              href={"/"}
              content="Perguntas frequentes"
              className="text-secondary200"
            />
            <Link
              href={"/"}
              content="Trabalhe conosco"
              className="text-secondary200"
            />
          </div>
        </div>
      </div>
      <div className="my-14 h-px w-full bg-[#0c8cbf]" />
      <div className="flex flex-col justify-center gap-2 text-center text-sm text-secondary200">
        <p>©2018 - GODRIVES | Todos os direitos reservardos</p>
        <p className="text-xs opacity-70">Desenvolvido por Gabriel Manicucci</p>
      </div>
    </div>
  )
}
