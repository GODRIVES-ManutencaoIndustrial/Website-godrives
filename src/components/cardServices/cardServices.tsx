import Image from "next/image"
import { DataCardServices, DataCardServicesType } from "./cardServices.data"
import Link from "next/link"

export default function CardServices() {
  return (
    <div className="my-20 flex w-full flex-col items-center gap-24 max-lg:gap-20">
      {DataCardServices.map(
        ({ title, description, src }: DataCardServicesType) => (
          <div className="flex w-full items-center justify-between gap-16 max-lg:flex-col max-lg:gap-12">
            {/* <Image src={src} width={400} height={400} alt={description} /> */}
            <div className="min-h-96 min-w-96 rounded-3xl bg-gray-50 shadow-2xl max-lg:min-h-[300px] max-lg:min-w-[300px]"></div>
            <div className="flex h-96 items-center max-lg:h-auto max-lg:px-4">
              <div className="w-full max-w-2xl max-lg:w-full">
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
        ),
      )}
    </div>
  )
}
