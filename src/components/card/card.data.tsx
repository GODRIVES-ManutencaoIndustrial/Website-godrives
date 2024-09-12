import readySVG from "../../../public/ready.svg"

type DataCardType = {
  title: string
  description: string
  src: string
}

export const DataCard: DataCardType[] = [
  {
    title: "Reparo de Inversores de Frequência",
    description:
      "Diagnóstico e reparo precisos de inversores para garantir eficiência e controle dos motores industriais.",
    src: readySVG,
  },
  {
    title: "Reparo de Soft Starter",
    description:
      "Manutenção de soft starter para partidas suaves de motores, reduzindo o desgaste e aumentando a vida útil.",
    src: readySVG,
  },
  {
    title: "Reparo de IHM",
    description:
      "Correção rápida de IHMs para operação contínua e segura, sendo assim facilita a interação com os sistemas industriais.",
    src: readySVG,
  },
  {
    title: "Reparo de Servos Acionamentos",
    description:
      "Diagnóstico e reparo de servos acionamentos para controle preciso de movimento em máquinas industriais.",
    src: readySVG,
  },
  {
    title: "Reparo de PLC",
    description:
      "Reparo completo de PLCs para garantir a automação eficiente e funcional das operações industriais.",
    src: readySVG,
  },
  {
    title: "Reparo de Painel PC",
    description:
      "Manutenção de Painéis PC para monitoramento e controle contínuos em ambientes industriais rigorosos.",
    src: readySVG,
  },
]
