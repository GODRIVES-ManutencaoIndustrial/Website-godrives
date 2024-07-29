import readySVG from "../../../public/ready.svg"

type DataCardType = {
  title: string
  description: string
  src: string
}

export const DataCard: DataCardType[] = [
  {
    title: "Reparo Inversores de Frequência",
    description:
      "Diagnóstico e reparo preciso de inversores para garantir eficiência e controle dos motores industriais.",
    src: readySVG,
  },
  {
    title: "Reparo em Softstarters",
    description:
      "Manutenção de softstarters para partidas suaves de motores, reduzindo desgaste e aumentando a vida útil.",
    src: readySVG,
  },
  {
    title: "Reparo em IHM's",
    description:
      "Correção rápida de IHMs para operação contínua e segura, facilitando a interação com sistemas industriais.",
    src: readySVG,
  },
  {
    title: "Reparo Servos Acionamentos",
    description:
      "Diagnóstico e reparo de servos para controle preciso de movimento em máquinas industriais.",
    src: readySVG,
  },
  {
    title: "Reparo em PLC´s",
    description:
      "Reparo completo de PLCs para garantir a automação eficiente e funcional das operações industriais.",
    src: readySVG,
  },
  {
    title: "Reparo em PainelPC",
    description:
      "Manutenção de PainelPCs para monitoramento e controle contínuos em ambientes industriais rigorosos.",
    src: readySVG,
  },
]
