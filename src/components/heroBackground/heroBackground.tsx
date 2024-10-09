import Image from "next/image"
import heroWallpaper from "@/../public/heroWallpaper.svg"

export default function HeroBackground() {
  return (
    <>
      <Image
        src={heroWallpaper}
        width={1920}
        height={1080}
        className="min-w-max opacity-80 mix-blend-overlay lg:w-screen"
        alt="papel de parede represetado por um emaranhado de fios"
      />
    </>
  )
}
