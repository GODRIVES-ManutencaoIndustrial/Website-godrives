import { StaticImageData } from "next/image"
import recebimento from "../../../public/recebimento.png"
import inspecao from "../../../public/inspeçao.png"
import manutençao from "../../../public/manutençao.png"
import limpeza from "../../../public/limpeza.png"
import testes from "../../../public/testes.png"

type TypeDataCarouselProcess = {
  title: string
  description: string
  src: StaticImageData
}

export const DataCarouselProcess: TypeDataCarouselProcess[] = [
  {
    title: "Recebimento",
    description:
      "Os equipamentos são identificados e catalogados em nosso sistema assim que são recebidos na empresa. São armazenados em prateleiras industriais, local limpo, organizado e de fácil acesso interno.",
    src: recebimento,
  },
  {
    title: "Inspeção",
    description:
      "O equipamento é levado ao laboratório para realizarmos testes em busca problemas. Ao encontrar os problemas, apontamos no sistema de acordo com cada Ordem de Serviço e passamos para a equipe de orçamentos.",
    src: inspecao,
  },
  {
    title: "Limpeza",
    description:
      "Os equipamentos são destinados a limpeza industrial, local interno onde utilizamos produtos apropriados para cada peça do equipamento. Sabemos que o pó pode se tornar um condutor de eletricidade e danificar o equipamento, por isso levamos muito a sério a limpeza.",
    src: limpeza,
  },
  {
    title: "Manutenção",
    description:
      "Os nossos técnicos ultra qualificados realizam a troca dos componentes e peças com defeito. Para isso, dispomos de um vasto conhecimento em eletrônica, pois tornamos o equipamento de volta a vida com muita QUALIDADE e agilidade.",
    src: manutençao,
  },
  {
    title: "Testes e envio",
    description:
      "Realizamos uma bateria de testes com carga aplicada de acordo com a capacidade nominal de cada equipamento, após isso enviamos os equipamentos de volta ao cliente, acompanhando o status de entrega e satisfação dos nossos clientes.",
    src: testes,
  },
]
