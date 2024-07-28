import Image from "next/image"
import heroWallpaper from "../../../public/heroWallpaper.svg"

export default function HeroBackground() {
  return (
    <>
      <Image
        src={heroWallpaper}
        width={0}
        height={0}
        className="min-w-max opacity-80 mix-blend-overlay"
        alt="papel de parede represetado por um emaranhado de fios"
      />
    </>
  )
}
