"use client"

import Link from "next/link"

const ArrowContactButton = () => {
  return (
    <div>
      <Link href={"https://wa.me/5562998817695"} target="_blank">
        <button className="inline-flex h-[54px] w-64 items-center justify-center gap-5 rounded-[28px] border-2 border-blue bg-blue fill-secondary-900 py-3 text-blue-900 transition-all hover:bg-secondary-900 hover:fill-blue hover:text-blue">
          <p className="text-xl font-medium">Fale Conosco</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="16"
            viewBox="0 0 27 16"
          >
            <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z" />
          </svg>
        </button>
      </Link>
    </div>
  )
}

export default ArrowContactButton
