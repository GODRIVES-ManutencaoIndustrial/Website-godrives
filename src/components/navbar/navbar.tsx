"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

import { usePathname } from "next/navigation"
import { HiOutlineMenuAlt3 } from "react-icons/hi"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    if (window !== undefined) {
      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <header
      className={`fixed z-50 w-full ${scrolled ? "bg-backgroundNavBar" : "bg-transparent"}`}
    >
      <nav className="mx-auto my-0 flex h-[74px] max-w-7xl items-center  justify-between px-5">
        <div className="pr-36">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="logo GODRIVES"
              width={44}
              height={44}
              className=""
            />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <HiOutlineMenuAlt3 size={42} className="text-primaryBlue" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center gap-10 bg-primaryBlue p-0 pt-10">
            <SheetHeader className="m-0 mt-10 w-full space-y-0">
              <SheetClose asChild>
                <Link
                  href={"/"}
                  className={`h-full w-full py-5 text-center transition-all hover:bg-blue600 ${pathname === "/" ? "bg-blue400" : ""}`}
                >
                  Início
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href={"/routes/empresa"}
                  className={`h-full w-full py-5 text-center transition-all hover:bg-blue600 ${pathname === "/routes/empresa" ? "bg-blue400" : ""}`}
                >
                  Empresa
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href={"/routes/servicos"}
                  className={`h-full w-full py-5 text-center transition-all hover:bg-blue600 ${pathname === "/routes/servicos" ? "bg-blue400" : ""}`}
                >
                  Serviços
                </Link>
              </SheetClose>
            </SheetHeader>

            <SheetClose asChild>
              <button
                onClick={() =>
                  (window.location.href = "https://wa.me/5562998817695")
                }
                className="inline-flex h-[56px] w-64 items-center justify-center gap-5 rounded-[28px] border-2 border-secondary900 bg-primaryBlue fill-secondary900 py-3 text-blue900 transition-all hover:bg-secondary900 hover:fill-primaryBlue hover:text-primaryBlue"
              >
                <p className="font-['Poppins'] text-xl font-normal ">
                  Contate-nos
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="16"
                  viewBox="0 0 27 16"
                >
                  <path d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z" />
                </svg>
              </button>
            </SheetClose>
          </SheetContent>
        </Sheet>

        <>
          <ul className="hidden items-center gap-8 text-primaryBlue md:flex">
            <li
              className={`text-primaryBlue transition-all hover:brightness-150 ${pathname === "/" ? "brightness-150" : ""}`}
            >
              <a href="/">Início</a>
            </li>
            <li
              className={`text-primaryBlue transition-all hover:brightness-150 ${pathname === "/routes/empresa" ? "brightness-150" : ""}`}
            >
              <a href="/routes/empresa">Empresa</a>
            </li>
            <li
              className={`text-primaryBlue transition-all hover:brightness-150 ${pathname === "/routes/servicos" ? "brightness-150" : ""}`}
            >
              <a href="/routes/servicos">Serviços</a>
            </li>
          </ul>

          <Link
            href="https://wa.me/5562998817695"
            target="_blank"
            className="hidden md:flex"
          >
            <button className="bg-transparent hover:text-backgroundBlue rounded-3xl border-2 border-primaryBlue px-7 py-2.5 font-medium text-primaryBlue transition-all hover:bg-primaryBlue hover:text-secondary900">
              Contate-nos
            </button>
          </Link>
        </>
      </nav>
    </header>
  )
}
