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
      className={`fixed z-50 w-full px-5 ${scrolled ? "bg-backgroundNavBar" : "bg-transparent"}`}
    >
      <nav className="mx-auto my-0 flex h-[74px] max-w-7xl items-center justify-between max-lg:max-w-lg">
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
          <SheetTrigger className="lg:hidden">
            <HiOutlineMenuAlt3 size={42} className="text-blue" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center gap-10 bg-blue p-0 pt-10">
            <SheetHeader className="m-0 mt-10 w-full space-y-0">
              <SheetClose asChild>
                <Link
                  href={"/"}
                  className={`h-full w-full py-5 text-center transition-all hover:bg-blue-600 ${pathname === "/" ? "bg-blue-400" : ""}`}
                >
                  Início
                </Link>
              </SheetClose>

              {/* <SheetClose asChild>
                <Link
                  href={"/routes/empresa"}
                  className={`h-full w-full py-5 text-center transition-all hover:bg-blue-600 ${pathname === "/routes/empresa" ? "bg-blue-400" : ""}`}
                >
                  Empresa
                </Link>
              </SheetClose> */}

              <SheetClose asChild>
                <Link
                  href={"/routes/servicos"}
                  className={`h-full w-full py-5 text-center transition-all hover:bg-blue-600 ${pathname === "/routes/servicos" ? "bg-blue-400" : ""}`}
                >
                  Serviços
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href={"/routes/workUs"}
                  className={`h-full w-full py-5 text-center transition-all hover:bg-blue-600 ${pathname === "/routes/contact" ? "bg-blue-400" : ""}`}
                >
                  Trabalhe Conosco
                </Link>
              </SheetClose>
            </SheetHeader>

            <SheetClose asChild>
              <button
                onClick={() =>
                  (window.location.href = "https://wa.me/5562998817695")
                }
                className="inline-flex h-[56px] w-52 items-center justify-center gap-4 rounded-[28px] border-2 border-secondary-900 bg-blue fill-secondary-900 py-3 text-blue-900 transition-all hover:bg-secondary-900 hover:fill-blue hover:text-blue"
              >
                <p className="text-lg font-medium">Contate-nos</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
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
          <ul className="hidden h-full items-end gap-8 text-blue lg:flex">
            <li
              className={`h-11 text-blue transition-all hover:brightness-150 ${pathname === "/" ? "border-b-2 border-blue brightness-150" : ""}`}
            >
              <a href="/">Início</a>
            </li>
            <li
              className={`h-11 text-blue transition-all hover:brightness-150 ${pathname === "/routes/servicos" ? "border-b-2 border-blue brightness-150" : ""}`}
            >
              <a href="/routes/servicos">Serviços</a>
            </li>
            <li
              className={`h-11 text-blue transition-all hover:brightness-150 ${pathname === "/routes/workUs" ? "border-b-2 border-blue brightness-150" : ""}`}
            >
              <a href="/routes/workUs">Trabalhe Conosco</a>
            </li>
          </ul>

          <Link
            href="https://wa.me/5562998817695"
            target="_blank"
            className="hidden lg:flex"
          >
            <button className="bg-transparent hover:text-backgroundBlue rounded-3xl border-2 border-blue px-7 py-2.5 font-medium text-blue transition-all hover:bg-blue hover:text-secondary-900">
              Contate-nos
            </button>
          </Link>
        </>
      </nav>
    </header>
  )
}
