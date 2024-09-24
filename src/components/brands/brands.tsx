import Image from "next/image"
import { brandsData, BrandsDataType } from "./brands.data"
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

export default function Brands() {
  return (
    // <div className="relative flex min-h-[50px] w-4/5 justify-between gap-44 overflow-hidden">
    //   {brandsData.map((brand, i) => (
    //     <div
    //       className="animate-slide absolute right-[-384px] flex w-96 items-center justify-center"
    //       style={
    //         {
    //           animationDelay: `${i * 2}s`,
    //           "--items": `${brandsData.length}`,
    //         } as React.CSSProperties
    //       }
    //     >
    //       <Image src={brand.src} alt={brand.alt} key={brand.alt} height={32} />
    //     </div>
    //   ))}
    // </div>
    <div className="whitespace-nowrap">
      <div className="inline-flex min-w-[100dvw] animate-slide justify-around gap-32">
        <Image src={ABB} alt={""} height={32} className="" />
        <Image src={WEG} alt={""} height={32} className="" />
        <Image src={SIEMENS} alt={""} height={32} className="" />
        <Image src={Toshiba} alt={""} height={32} className="" />
        <Image src={OMRON} alt={""} height={32} className="" />
        <Image src={Scheneider} alt={""} height={32} className="" />
        <Image src={YASKAWA} alt={""} height={32} className="" />
        <Image src={AllenBradley} alt={""} height={32} className="" />
        <Image src={SEWEURODRIVE} alt={""} height={32} className="" />
        <Image src={Pfannenberg} alt={""} height={32} className="" />
        <Image src={Danffos} alt={""} height={32} className="mr-32" />
      </div>
      <div className="inline-flex min-w-[100dvw] animate-slide justify-around gap-32">
        <Image src={ABB} alt={""} height={32} className="" />
        <Image src={WEG} alt={""} height={32} className="" />
        <Image src={SIEMENS} alt={""} height={32} className="" />
        <Image src={Toshiba} alt={""} height={32} className="" />
        <Image src={OMRON} alt={""} height={32} className="" />
        <Image src={Scheneider} alt={""} height={32} className="" />
        <Image src={YASKAWA} alt={""} height={32} className="" />
        <Image src={AllenBradley} alt={""} height={32} className="" />
        <Image src={SEWEURODRIVE} alt={""} height={32} className="" />
        <Image src={Pfannenberg} alt={""} height={32} className="" />
        <Image src={Danffos} alt={""} height={32} className="mr-32" />
      </div>
    </div>
  )
}
