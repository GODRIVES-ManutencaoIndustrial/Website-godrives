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
          className="my-2 flex h-40 w-36 items-center justify-center rounded-lg bg-gray200 px-10"
        >
          <p className="text-center text-primaryRed">{data.name}</p>
        </div>
      ))}
    </div>
  )
}
