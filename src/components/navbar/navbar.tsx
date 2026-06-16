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

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { usePathname } from "next/navigation"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import logo from "@/../public/logo.svg"

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
      <nav className="mx-auto my-0 flex h-[74px] max-w-7xl items-center justify-between">
        <div className="pr-36">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo GODRIVES"
              width={44}
              height={44}
              className=""
            />
          </Link>
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden" aria-label="Expandir menu mobile">
            <HiOutlineMenuAlt3 size={42} className="text-blue" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center gap-10 bg-blue p-0 pt-10">
            <SheetHeader className="m-0 mt-10 w-full space-y-0">
              <SheetClose asChild>
                <Link
                  href={"/"}
                  className={`h-full w-full py-5 text-center font-medium transition-all hover:bg-blue-600 ${pathname === "/" ? "bg-blue-400" : ""}`}
                >
                  Início
                </Link>
              </SheetClose>

              <Accordion type="single" collapsible className="">
                <AccordionItem value="item-1" className="">
                  <AccordionTrigger
                    className={`items-center justify-center gap-3 transition-all hover:bg-blue-600`}
                  >
                    Empresa
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-3">
                      <SheetClose asChild>
                        <Link
                          href="#about"
                          title="Introduction"
                          className={`w-full py-3 text-center text-sm transition-all hover:bg-blue-600`}
                        >
                          Sobre Nós
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href={"/#contact"}
                          className={`w-full py-3 text-center transition-all hover:bg-blue-600`}
                        >
                          Contato
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/trabalheConosco"
                          className={`w-full py-3 text-center transition-all hover:bg-blue-600 ${pathname === "/trabalheConosco" ? "bg-blue-400" : ""}`}
                        >
                          Trabalhe Conosco
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="#FAQ"
                          className={`w-full py-3 text-center transition-all hover:bg-blue-600`}
                        >
                          Perguntas Frequentes
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/#processos"
                          className={`w-full py-3 text-center transition-all hover:bg-blue-600`}
                        >
                          Processos
                        </Link>
                      </SheetClose>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <SheetClose asChild>
                <Link
                  href={"/servicos"}
                  className={`h-full w-full py-5 text-center font-medium transition-all hover:bg-blue-600 ${pathname === "/servicos" ? "bg-blue-400" : ""}`}
                >
                  Serviços
                </Link>
              </SheetClose>
            </SheetHeader>

            <SheetClose asChild>
              <button
                aria-label="Fale conosco no menu mobile"
                onClick={() => {
                  window.location.href = "https://wa.me/5562998817695?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Go%20Drives%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                }}
                className="inline-flex h-[56px] w-52 items-center justify-center gap-4 rounded-[28px] border-2 border-secondary-900 bg-blue fill-secondary-900 py-3 text-blue-900 transition-all hover:bg-secondary-900 hover:fill-blue hover:text-blue"
              >
                <p className="text-lg font-medium">Fale Conosco</p>
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
          <NavigationMenu className="hidden h-full items-end text-blue lg:flex">
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem
                className={`h-[46px] text-blue transition-all hover:brightness-150 ${pathname === "/" ? "border-b-2 border-blue brightness-150" : ""}`}
              >
                <Link href={"/"}>Início</Link>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={`h-[46px] text-blue transition-all hover:brightness-150`}
              >
                <NavigationMenuTrigger className="items-start p-0">
                  Empresa
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-backgroundNavBar px-10 py-7">
                  <ul className="flex w-48 flex-col text-sm text-blue">
                    <li className="rounded-xl font-medium transition-all hover:cursor-pointer hover:bg-blue-600 hover:text-blue-950 hover:brightness-150">
                      <Link
                        href="/#about"
                        title="Introduction"
                        className="inline-flex w-full p-3"
                      >
                        Sobre Nós
                      </Link>
                    </li>

                    <li className="rounded-xl font-medium transition-all hover:cursor-pointer hover:bg-blue-600 hover:text-blue-950 hover:brightness-150">
                      <Link
                        href="/#contact"
                        title="Introduction"
                        className="inline-flex w-full p-3"
                      >
                        Contato
                      </Link>
                    </li>
                    <li className="rounded-xl font-medium transition-all hover:cursor-pointer hover:bg-blue-600 hover:text-blue-950 hover:brightness-150">
                      <Link
                        href="/trabalheConosco"
                        title="Introduction"
                        className="inline-flex w-full p-3"
                      >
                        Trabalhe Conosco
                      </Link>
                    </li>
                    <li className="rounded-xl font-medium transition-all hover:cursor-pointer hover:bg-blue-600 hover:text-blue-950 hover:brightness-150">
                      {" "}
                      <Link
                        href="#FAQ"
                        title="Introduction"
                        className="inline-flex w-full p-3"
                      >
                        Perguntas Frequentes
                      </Link>
                    </li>
                    <li className="rounded-xl font-medium transition-all hover:cursor-pointer hover:bg-blue-600 hover:text-blue-950 hover:brightness-150">
                      <Link
                        href="/#processos"
                        title="Introduction"
                        className="inline-flex w-full p-3"
                      >
                        Processos
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={`h-[46px] text-blue transition-all hover:brightness-150 ${pathname === "/servicos" ? "border-b-2 border-blue brightness-150" : ""}`}
              >
                <Link href={"/servicos"}>Serviços</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="https://wa.me/5562998817695?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Go%20Drives%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            className="hidden lg:flex"
          >
            <button
              aria-label="Fale conosco menu desktop"
              className="bg-transparent hover:text-backgroundBlue rounded-3xl border-2 border-blue px-7 py-2.5 font-medium text-blue transition-all hover:bg-blue hover:text-secondary-900"
            >
              Fale Conosco
            </button>
          </Link>
        </>
      </nav>
    </header>
  )
}
