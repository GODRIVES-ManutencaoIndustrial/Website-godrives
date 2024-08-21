import Image from "next/image"
import { DataCard } from "./card.data"

export default function Card() {
  return (
    <div className="flex flex-col gap-10">
      {DataCard.map((data, index) => (
        <div
          key={index}
          className="bg-gray-50 border-secondary-50 flex flex-col gap-10 rounded-md border px-9 py-12 shadow-lg"
        >
          <Image src={data.src} alt={data.description} width={28} height={28} />
          <div className="flex flex-col gap-3">
            <h3 className="text-secondary-500 text-xl font-semibold">
              {data.title}
            </h3>
            <p className="text-secondary-300 text-base">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
