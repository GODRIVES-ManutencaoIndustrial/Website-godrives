import Image from "next/image"
import { DataCard } from "./card.data"

export default function Card() {
  return (
    <div className="flex flex-col gap-5">
      {DataCard.map((data, index) => (
        <div
          key={index}
          className="shadow-m5 flex flex-col gap-10 rounded-md border border-secondary50 bg-gray50 px-9 py-12"
        >
          <Image src={data.src} alt={data.description} width={28} height={28} />
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-secondary500">
              {data.title}
            </h3>
            <p className="text-base text-secondary300">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
