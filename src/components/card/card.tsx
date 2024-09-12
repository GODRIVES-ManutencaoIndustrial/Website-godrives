import Image from "next/image"
import { DataCard } from "./card.data"
import { Motion } from "../motion/motion"

export default function Card() {
  return (
    <div className="grid grid-cols-3 flex-col gap-9 max-lg:flex lg:gap-7 xl:gap-10">
      {DataCard.map((data, index) => (
        <Motion
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-10 rounded-md border border-secondary-50 bg-gray-50 px-9 py-12 shadow-lg"
          key={index}
          children={
            <>
              <Image
                src={data.src}
                alt={data.description}
                width={28}
                height={28}
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-secondary-500">
                  {data.title}
                </h3>
                <p className="text-base text-secondary-300">
                  {data.description}
                </p>
              </div>
            </>
          }
        />
      ))}
    </div>
  )
}
