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
                className="flex w-full items-center justify-between gap-20 max-xl:gap-16 max-lg:flex-col max-lg:gap-12"
              >
                <Image
                  className="min-h-96 min-w-96 rounded-3xl bg-gray-50 shadow-2xl max-lg:min-h-[300px] max-lg:min-w-[300px]"
                  src={src}
                  // width={300}
                  // height={300}
                  alt={description}
                />
                <div className="flex h-96 items-center max-lg:h-auto max-lg:px-4">
                  <div className="w-full">
                    <h3 className="text-left text-3xl font-light text-secondary-500">
                      {title}
                    </h3>
                    <p className="my-4 w-full text-base text-secondary-300 max-lg:text-sm">
                      {description}
                    </p>
                    <Link
                      className="flex h-14 w-52 items-center justify-center rounded-2xl bg-blue text-center text-lg text-primaryWhite transition-all hover:brightness-90"
                      // onClick={() => (window.location.href = "https://wa.me/5562998817695")}
                      href={"https://wa.me/5562998817695"}
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
