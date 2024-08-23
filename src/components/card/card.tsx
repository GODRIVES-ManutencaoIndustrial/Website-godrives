import Image from "next/image"
import { DataCard } from "./card.data"

export default function Card() {
  return (
    <div className="grid grid-cols-3 flex-col gap-10 max-lg:flex">
      {DataCard.map((data, index) => (
        <div
          key={index}
          className="flex flex-col gap-10 rounded-md border border-secondary-50 bg-gray-50 px-9 py-12 shadow-lg"
        >
          <Image src={data.src} alt={data.description} width={28} height={28} />
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-secondary-500">
              {data.title}
            </h3>
            <p className="text-base text-secondary-300">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
