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
      <div className="flex w-full items-center justify-end gap-2">
        <CarouselPrevious className="border-2 border-secondary-500 text-secondary-500" />
        <CarouselNext className="border-2 border-secondary-500 text-secondary-500" />
      </div>

      <CarouselContent className="">
        {DataCarouselProcess.map((data, index) => (
          <CarouselItem
            key={index}
            className="flex h-[35.37rem] lg:h-[21.25rem] lg:min-w-[45rem] lg:basis-1/3"
          >
            <div className="rounded-xl bg-primaryWhite shadow-lg lg:flex lg:items-center">
              <Image
                src={data.src}
                width={340}
                height={400}
                className="max-lg:rounded-t-xl lg:rounded-l-xl"
                alt={data.description}
              />
              <div className="flex flex-col px-5 py-5 lg:px-10">
                <h3 className="mb-2 text-2xl font-semibold text-secondary-500 lg:mb-4 lg:text-3xl">
                  {data.title}
                </h3>
                <p className="mb-2 text-[13px] leading-5 text-secondary-300 lg:text-sm">
                  {data.description}
                </p>
                <Link href={"https://wa.me/5562998817695"} target="_blank">
                  <button className="rounded-3xl bg-blue px-7 py-2.5 text-sm text-primaryWhite transition-all hover:brightness-75 lg:py-3 lg:text-base lg:font-normal">
                    Contate-nos
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
