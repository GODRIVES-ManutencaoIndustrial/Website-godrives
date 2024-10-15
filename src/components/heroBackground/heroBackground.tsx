import Image from "next/image"

export default function HeroBackground() {
  return (
    <Image
      src={
        "https://n6ex5dyrtzbs9rq2.public.blob.vercel-storage.com/heroWallpaper-lhHS7YYDB3IMeEilGaXwktURJVlewt.svg"
      }
      width={1920}
      height={1080}
      className="min-w-max mix-blend-overlay lg:w-screen"
      alt="papel de parede represetado por um emaranhado de fios"
    />
  )
}
