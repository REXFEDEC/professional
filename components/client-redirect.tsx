"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function ClientRedirect() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const { hostname, pathname: currentPath, search, hash } = window.location

    if (hostname === "sameerm.pages.dev" || hostname === "www.sameerm.pages.dev") {
      const queryString = searchParams ? `?${searchParams.toString()}` : search
      const destination = `https://sameer.goneto.space${pathname ?? currentPath}${queryString}${hash}`
      window.location.replace(destination)
    }
  }, [pathname, searchParams])

  return null
}
