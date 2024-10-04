import Image from "next/image"
import { DataCardServices, DataCardServicesType } from "./cardServices.data"
import Link from "next/link"
import { Motion } from "../motion/motion"

export default function CardServices() {
  return (
    <div className="my-20 flex w-full flex-col items-center gap-32 max-lg:gap-20">
      {DataCardServices.map(
        ({ title, description, src }: DataCardServicesType) => (
          <Motion
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileInView={{ opacity: 1, x: 0 }}
            key={title}
            children={
              <div
                key={title}
                className="flex w-full items-center justify-between gap-20 max-xl:gap-16 max-lg:gap-12 max-md:flex-col"
              >
                <Image
                  className="rounded-3xl bg-gray-50 shadow-2xl md:h-[23rem] md:w-[23rem] lg:h-[26rem] lg:w-[26rem] xl:h-[28rem] xl:w-[28rem]"
                  src={src}
                  alt={description}
                  loading="lazy"
                />
                <div className="flex items-center">
                  <div className="w-full">
                    <h3 className="text-left text-3xl font-light text-secondary-500 xl:text-4xl">
                      {title}
                    </h3>
                    <p className="my-4 w-full text-base text-secondary-300 max-lg:text-sm lg:text-lg">
                      {description}
                    </p>
                    <Link
                      className="flex h-14 w-52 items-center justify-center rounded-2xl bg-blue text-center text-lg text-primaryWhite transition-all hover:brightness-90"
                      href={"https://wa.me/5562998817695"}
                      target="_blank"
                    >
                      Fale conosco
                    </Link>
                  </div>
                </div>
              </div>
            }
          />
        ),
      )}
    </div>
  )
}
