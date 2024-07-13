'use client'
import { usePathname } from "next/navigation"

export const Header = () => {
  const path = usePathname()
  const page = path?.split("/")[0] === "" ? "home" : path?.split("/")[0]

  const title: any = {
    "home": {
      title: "Visão geral"
    }
  }

  return (
    <div className="flex items-center justify-between w-full p-12 pb-0">
      <h1 className="font-semibold text-2xl">
        {title[page]?.title}
      </h1>
    </div>
  )
}