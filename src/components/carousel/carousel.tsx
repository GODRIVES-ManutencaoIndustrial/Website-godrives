import { DataCarousel } from "./carousel.data"
import "./carousel.css"

export default function Carousel() {
  return (
    <div
      id="carousel"
      className="flex w-full items-center gap-3 overflow-x-scroll"
    >
      {DataCarousel.map((data, index) => (
        <div
          key={index}
          className="flex h-40 items-center justify-center rounded-lg bg-gray-200 max-lg:my-2"
        >
          <p className="w-36 px-5 text-center text-red">{data.name}</p>
        </div>
      ))}
    </div>
  )
}
