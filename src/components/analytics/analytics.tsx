"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", "G-MENXW4837W", {
          page_path: url,
        })
      }
    }

    handleRouteChange(pathname)

    return () => {
      handleRouteChange(pathname)
    }
  }, [pathname])

  return null
}
