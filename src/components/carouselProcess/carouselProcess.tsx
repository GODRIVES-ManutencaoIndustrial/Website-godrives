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

export default function CarouselProcess() {
  return (
    <Carousel
      className="flex w-full flex-col gap-5"
      orientation="horizontal"
      opts={{ align: "start" }}
    >
      <div className="flex items-center justify-end gap-2">
        <CarouselPrevious className="border-2 border-secondary500 text-secondary300" />
        <CarouselNext className="border-2 border-secondary500 text-secondary500" />
      </div>

      <CarouselContent>
        {DataCarouselProcess.map((data, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="rounded-xl bg-primaryWhite shadow-lg">
              <Image
                src={data.src}
                width={0}
                height={0}
                className="w-full rounded-t-xl "
                alt={data.description}
              />
              <div className="px-5 py-10">
                <h3 className="mb-6 text-3xl font-semibold text-secondary500">
                  {data.title}
                </h3>
                <p className="mb-4 text-[13px] leading-5 text-secondary300">
                  {data.description}
                </p>
                <button className="rounded-3xl border-2 bg-primaryBlue px-7 py-3 font-medium text-primaryWhite transition-all">
                  Contante-nos
                </button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
