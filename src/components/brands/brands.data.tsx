import { StaticImageData } from "next/image"
import ABB from "@/../public/ABB.svg"
import WEG from "@/../public/WEG.svg"
import SIEMENS from "@/../public/SIEMENS.svg"
import Toshiba from "@/../public/Toshiba.svg"
import OMRON from "@/../public/OMRON.svg"
import Scheneider from "@/../public/Schneider.svg"
import YASKAWA from "@/../public/YASKAWA.svg"
import AllenBradley from "@/../public/Allen-Bradley.svg"
import SEWEURODRIVE from "@/../public/SEWEURODRIVE.svg"
import Pfannenberg from "@/../public/Pfannenberg.svg"
import Danffos from "@/../public/Danffos.svg"

export type BrandsDataType = {
  src: string
  alt: string
}

export const brandsData: BrandsDataType[] = [
  { src: ABB, alt: "Empresa ABB" },
  { src: WEG, alt: "Empresa WEG" },
  { src: SIEMENS, alt: "Empresa SIEMENS" },
  { src: Toshiba, alt: "Empresa Toshiba" },
  { src: OMRON, alt: "Empresa OMRON" },
  { src: AllenBradley, alt: "Empresa AllenBradley" },
  { src: Scheneider, alt: "Empresa Scheneider" },
  { src: SEWEURODRIVE, alt: "Empresa SEWEURODRIVE" },
  { src: YASKAWA, alt: "Empresa YASKAWA" },
  { src: Pfannenberg, alt: "Empresa Pfannenberg" },
  { src: Danffos, alt: "Empresa Danffos" },
]
