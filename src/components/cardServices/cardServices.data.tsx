import { StaticImageData } from "next/image"
import imageServiceCard from "../../../public/image-cardService.svg"

export type DataCardServicesType = {
  title: string
  description: string
  src: StaticImageData
}

export const DataCardServices: DataCardServicesType[] = [
  {
    title: "Reparo Inversores de Frequência",
    description:
      "Somos especialistas em reparo de inversores de frequência. Nossa equipe técnica está equipada com as ferramentas e conhecimentos necessários para diagnosticar e reparar falhas, garantindo a operação contínua e eficiente dos seus sistemas.",
    src: imageServiceCard,
  },
  {
    title: "Reparo em Softstarters",
    description:
      "Os softstarters são dispositivos essenciais para o controle suave da partida e parada de motores, reduzindo o desgaste mecânico e prolongando a vida útil dos equipamentos. Nosso serviço de reparo em softstarters assegura que seus motores operem de maneira confiável e eficiente, minimizando o tempo de inatividade e maximizando a produtividade.",
    src: imageServiceCard,
  },
  {
    title: "Reparo em IHM's",
    description:
      "As IHMs são fundamentais para a interação entre operadores e sistemas de controle industrial. Oferecemos serviços de reparo para IHMs de diversas marcas e modelos, garantindo que você tenha uma interface de usuário funcional e intuitiva. Nossa equipe diagnostica e corrige problemas rapidamente, permitindo uma operação ininterrupta e segura.",
    src: imageServiceCard,
  },
  {
    title: "Reparo Servos Acionamentos",
    description:
      "Os servos acionamentos são vitais para o controle de movimento em máquinas e equipamentos industriais. Nosso serviço de reparo garante que seus sistemas de movimento mantenham a precisão e a eficiência necessárias para suas operações. Realizamos diagnósticos detalhados e reparos com componentes de alta qualidade.",
    src: imageServiceCard,
  },
  {
    title: "Reparo em PLCs",
    description:
      "Os PLCs (Controladores Lógicos Programáveis) são o cérebro dos sistemas de automação industrial, controlando processos complexos e garantindo a operação eficiente da indústria. Nosso serviço de reparo em PLCs inclui diagnóstico, reparo e teste de controladores lógicos programáveis. Garantimos que seus sistemas de automação voltem a operar em plena funcionalidade.",
    src: imageServiceCard,
  },
  {
    title: "Reparo em PainelPC",
    description:
      "PainelPCs combinam a funcionalidade do PC com a durabilidade necessária para a indústria. Oferecemos o reparo, assegurando que esses dispositivos cruciais para a sua indústria estejam sempre operacionais. Realizamos diagnósticos completos e substituímos componentes defeituosos por peças de alta qualidade.",
    src: imageServiceCard,
  },
]
