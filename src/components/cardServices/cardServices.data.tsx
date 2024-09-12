import { StaticImageData } from "next/image"
import imageReparoInversorFrequencia from "../../../public/reparoInversorFrequencia.png"
import imageReparoIHM from "../../../public/reparoIHM.png"
import imageReparoSofstarter from "../../../public/reparoSoftStarter.png"
import imageReparoServoAcionamento from "../../../public/reparoServoAcionamento.png"
import imageReparoClp from "../../../public/reparoCLP.png"

export type DataCardServicesType = {
  title: string
  description: string
  src: StaticImageData
}

export const DataCardServices: DataCardServicesType[] = [
  {
    title: "Reparo de Inversores de Frequência",
    description:
      "Somos especialistas no reparo de inversores de frequência. Nossa equipe técnica é equipada com as ferramentas e os conhecimentos necessários para diagnosticar e reparar falhas, garantindo a operação contínua e eficiente dos seus sistemas.",
    src: imageReparoInversorFrequencia,
  },
  {
    title: "Reparo de Soft Starter",
    description:
      "Os soft starter são dispositivos essenciais para o controle suave da partida e parada de motores, reduzindo o desgaste mecânico e prolongando a vida útil dos equipamentos. Nosso serviço de reparo em soft starter garante que seus motores operem de maneira confiável e eficiente, minimizando o tempo de inatividade e maximizando a produtividade.",
    src: imageReparoSofstarter,
  },

  {
    title: "Reparo de Servos Acionamentos",
    description:
      "Os servos acionamentos são vitais para o controle de movimento em máquinas e equipamentos industriais. Nosso serviço de reparo garante que seus sistemas de movimento mantenham a precisão e a eficiência necessárias para suas operações. Realizamos diagnósticos detalhados e reparos com componentes de alta qualidade.",
    src: imageReparoServoAcionamento,
  },
  {
    title: "Reparo de PLCs",
    description:
      "Os PLCs (Controladores Lógicos Programáveis) são o cérebro dos sistemas de automação industrial, controlando processos complexos e garantindo a operação eficiente da indústria. Nosso serviço de reparo de PLCs abrange diagnóstico, reparo e teste de controladores lógicos programáveis, assegurando que seus sistemas de automação voltem a operar em plena funcionalidade.",
    src: imageReparoClp,
  },
  {
    title: "Reparo de IHMs",
    description:
      "As IHMs são fundamentais para a interação entre operadores e sistemas de controle industrial. Oferecemos serviços de reparo para IHMs de diversas marcas e modelos, garantindo uma interface de usuário funcional e intuitiva. Nossa equipe diagnostica e corrige problemas de forma rápida, permitindo uma operação ininterrupta e segura.",
    src: imageReparoIHM,
  },
]
