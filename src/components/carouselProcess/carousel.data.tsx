import { StaticImageData } from "next/image"
import recebimento from "../../../public/recebimento.png"
import inspecao from "../../../public/inspecao.png"
import manutençao from "../../../public/manutencao.png"
import limpeza from "../../../public/Limpeza.png"
import testes from "../../../public/testesOficial.png"

type TypeDataCarouselProcess = {
  title: string
  description: string
  src: StaticImageData
}

export const DataCarouselProcess: TypeDataCarouselProcess[] = [
  {
    title: "Recebimento",
    description:
      "No recebimento, os equipamentos são identificados e catalogados em nosso sistema assim que são recebidos na empresa. São armazenados em prateleiras industriais, em um local limpo, organizado e de fácil acesso interno.",
    src: recebimento,
  },
  {
    title: "Inspeção",
    description:
      "O equipamento é levado ao laboratório para realizarmos testes em busca de problemas. Ao encontra-los, eles são apontados no nosso sistema de acordo com cada ordem de serviço e repassados para a equipe de orçamentos.",
    src: inspecao,
  },
  {
    title: "Limpeza",
    description:
      "os Equipamentos são levados a limpeza industrial, onde utilizamos produtos apropriados no seu equipamento. O pó pode se tornar um condutor de eletricidade e danificar o equipamento, por isso levamos muito a sério a limpeza.",
    src: limpeza,
  },
  {
    title: "Manutenção",
    description:
      "Os nossos técnicos altamente qualificados realizam a troca dos componentes e peças com defeito. Para isso, dispomos de um vasto conhecimento em eletrônica, pois devolvemos o equipamento à vida com muita qualidade e agilidade.",
    src: manutençao,
  },
  {
    title: "Testes e envio",
    description:
      "Realizamos vários de testes com carga aplicada, de acordo com a capacidade nominal de cada equipamento, após isso enviamos os equipamentos de volta ao cliente, acompanhando o status da entrega e a satisfação dos nossos clientes.",
    src: testes,
  },
]
