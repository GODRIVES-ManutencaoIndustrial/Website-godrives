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
          className="bg-gray-200 my-2 flex h-40 w-36 items-center justify-center rounded-lg px-10"
        >
          <p className="text-red text-center">{data.name}</p>
        </div>
      ))}
    </div>
  )
}
