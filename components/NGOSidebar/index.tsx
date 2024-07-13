'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { createElement } from "react"
import { PiArrowSquareIn, PiBarcode, PiChartLineUp, PiFile, PiGear, PiHandHeartFill, PiQuestion, PiSquaresFour, PiUsersThree } from "react-icons/pi"

export const Sidebar = () => {
  const pathName = usePathname()

  const list = [
    {
      path: "/",
      icon: PiSquaresFour,
      label: "Visão geral"
    },
    {
      path: "/necessidades",
      icon: PiBarcode,
      label: "Necessidades"
    },
    /* {
      path: "/parceiros",
      icon: PiUsersThree,
      label: "Parceiros"
    }, */
    {
      path: "/relatorios",
      icon: PiFile,
      label: "Relatórios"
    }
  ]
  
  return (
    <aside className="flex flex-col p-10 gap-12 bg-paua-900 text-white w-[20rem] shrink-0">
      <div className="flex items-center gap-3 text-xl">
        <PiHandHeartFill className="fill-white w-[2rem] h-[2rem]"/>
        Unibrasil
      </div>

      <ul className="flex flex-col w-full gap-2">
        {list.map(({ path, icon, label }, key) => {
          const active = (path === "/" && pathName === "/ong") || (path !== "/" && pathName === `/ong${path}`)

          const Icon = () => createElement(icon, {
            className: "w-[2rem] h-[2rem]"
          })

          return (
            <li key={key}>
              <Link 
                href={`/ong${path}`}
                className={`
                  flex items-center py-2.5 gap-3
                  ${active ? "text-white" : "text-zinc-400"}
                  hover:text-white focus:text-white
                  rounded-lg
                `}
              >
                <Icon/>
                {label}
              </Link>
            </li>
          )
        })}
      </ul>

      <ul className="flex flex-col mt-auto">
        <li>
          <Link 
            href="#settings"
            className={`
              flex items-center py-2.5 gap-3
              text-zinc-400 hover:text-white focus:text-white
              rounded-lg
            `}
          >
            <PiGear className="w-[2rem] h-[2rem]"/>
            Configurações
          </Link>
        </li>

        <li>
          <Link 
            href="#settings"
            className={`
              flex items-center py-2.5 gap-3
              text-zinc-400 hover:text-white focus:text-white
              rounded-lg
            `}
          >
            <PiQuestion className="w-[2rem] h-[2rem]"/>
            Suporte
          </Link>
        </li>

        <li>
          <Link 
            href="/"
            className={`
              flex items-center py-2.5 gap-3
              text-zinc-400 hover:text-white focus:text-white
              rounded-lg
            `}
          >
            <PiArrowSquareIn className="w-[2rem] h-[2rem]"/>
            Sair
          </Link>
        </li>
      </ul>
    </aside>
  )
}