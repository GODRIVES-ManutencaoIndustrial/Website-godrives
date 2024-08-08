"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { DataCarouselProcess } from "./carousel.data"
import Image from "next/image"
import Link from "next/link"

export default function CarouselProcess() {
  return (
    <Carousel
      className="flex w-full flex-col gap-5"
      orientation="horizontal"
      opts={{ align: "start" }}
    >
      <div className="flex items-center justify-end gap-2">
        <CarouselPrevious className="border-2 border-secondary500 text-secondary500" />
        <CarouselNext className="border-2 border-secondary500 text-secondary500" />
      </div>

      <CarouselContent>
        {DataCarouselProcess.map((data, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center md:basis-1/2 lg:basis-1/3"
          >
            <div className="h-min max-w-[340px] rounded-xl bg-primaryWhite shadow-lg">
              <Image
                src={data.src}
                width={340}
                height={400}
                className="rounded-t-xl"
                alt={data.description}
              />
              <div className="px-5 py-6">
                <h3 className="mb-4 text-3xl font-semibold text-secondary500">
                  {data.title}
                </h3>
                <p className="mb-2 text-[13px] leading-5 text-secondary300">
                  {data.description}
                </p>
                <Link href={"https://wa.me/5562998817695"} target="_blank">
                  <button className="rounded-3xl border-2 bg-primaryBlue px-7 py-3 font-normal text-primaryWhite transition-all hover:brightness-75">
                    Contante-nos
                  </button>
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
