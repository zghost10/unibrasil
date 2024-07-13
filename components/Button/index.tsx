'use client'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment, createElement } from 'react'
import { PiCaretDown } from 'react-icons/pi'
import { IconType } from 'react-icons'
import { useParams, usePathname } from 'next/navigation'

interface IProps {
  className?: string
  children?: React.ReactNode
  variant?:
    | 'nav'
    | 'primary'
    | 'secondary'
    | 'primary-lines'
    | 'secondary-lines'
    | 'form'
  span?: string
  bold?: boolean
  icon?: IconType
  lang?: boolean
  disabled?: boolean
}

interface IButton {
  type: 'button'
  href?: never
  target?: never
  active?: boolean
  routes?: never
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<any> | any
  submit?: boolean
}

interface ILink {
  type: 'link'
  href?: string
  target?: 'blank'
  active?: boolean
  routes?: never
  onClick?: never
  submit?: never
}

interface IDropdown {
  type: 'dropdown'
  href?: string
  target?: 'blank'
  active?: boolean
  routes: any[]
  onClick?: never
  submit?: never
}

interface ISkeleton {
  type: 'skeleton'
  href?: never
  target?: never
  active?: boolean
  routes?: never
  onClick?: never
  submit?: never
}

export const Button: React.FC<IProps & (IButton | ILink | IDropdown | ISkeleton)> = ({
  type,
  href,
  icon,
  className,
  children,
  variant,
  active,
  submit,
  bold,
  target,
  routes,
  onClick,
  lang,
  disabled,
}) => {
  let styles: string = ''
  const path =
    typeof window !== 'undefined'
      ? window.location.protocol + '//' + window.location.host
      : ''
  const pathName = usePathname()
  const { locale } = useParams()

  const Icon: FC<{ className?: string }> = ({ className }) =>
    icon ? createElement(icon, { className }) : <></>

  switch (variant) {
    case 'nav':
      styles = `
        flex px-2 py-1.5 rounded-md
        text-white text-shadow itesm-center
        ${active ? 'bg-paua-600' : ''}
        hover:bg-ledax-700
      `
      break

    case 'primary-lines':
      styles = `
        ${bold ? 'font-bold' : 'font-normal'} text-base text-zinc-950
        flex ${bold ? 'px-3 py-2' : 'px-2 py-1'} bg-paua-400 rounded-lg
        border border-4 border-paua-400
        hover:border hover:border-4 hover:border-paua-400 hover:bg-transparent hover:text-white
      `
      break

    case 'secondary-lines':
      styles = `
        ${bold ? 'font-bold' : 'font-normal'} text-base text-white
        flex ${bold ? 'px-3 py-2' : 'px-2 py-1'} rounded-lg
        border border-4 border-paua-400
        hover:border hover:border-4 hover:border-paua-600 hover:bg-paua-600 hover:text-gray-200
      `
      break

    case 'secondary':
      styles = `
        ${bold ? 'font-bold' : 'font-normal'} text-base text-white
        flex ${bold ? 'px-3 py-2' : 'px-3 py-1.5'} ${active ? 'bg-gray-700' : 'bg-gray-800'} rounded-lg
        hover:bg-gray-700
      `
      break

    case 'form':
      styles = `
        flex flex-row w-full rounded-md bg-gray-700 my-2 px-3.5 py-2.5 gap-2 justify-center items-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-600
      `
      break

    default:
      styles = `
        ${bold ? 'font-bold' : 'font-normal'} text-base text-gray-200
        flex ${bold ? 'px-3 py-2' : 'px-3 py-1.5'} ${disabled ? 'bg-paua-800' : 'bg-paua-600'} rounded-lg
        hover:bg-ledax-700
      `
      break
  }

  switch (type) {
    case 'link':
      return (
        <Link
          href={`${href?.includes('http') ? href : path + href}` ?? '#'}
          className={`text-shadow no-underline m-0 ${className ?? ''} ${styles}`}
          target={target ?? href?.includes('http') ? '_blank' : undefined}
        >
          {!icon ? (
            children
          ) : (
            <div className="flex gap-2">
              <Icon className="w-[1.5rem!important] h-[1.5rem!important] text-white" />
              {children}
            </div>
          )}
        </Link>
      )

    case 'dropdown':
      return (
        <Menu
          as="div"
          className="relative inline-block justify-center items-center text-left"
        >
          <div className="flex h-full w-full justify-center items-center">
            <Menu.Button
              className={`text-shadow m-0  items-center ui-open:bg-paua-600 ui-open:text-gray-200 ${className ?? ''} ${styles}`}
            >
              {!icon ? (
                children
              ) : (
                <div className="flex gap-2">
                  <Icon
                    className={`shadowing w-[1.5rem!important] h-[1.5rem!important] text-white ${variant === 'nav' ? '' : 'hover:text-ledax-400'}`}
                  />
                  {children}
                </div>
              )}
              <PiCaretDown
                className="ml-2 -mr-1 h-5 w-5 shadowing"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="flex flex-col gap-1 p-1">
                {routes.map((route) => (
                  <Menu.Item key={route.name}>
                    {() => (
                      <Link
                        href={
                          route.slug.includes('http') || route.detach
                            ? route.slug
                            : `${path}${href}${route.slug}`
                        }
                        className={`
                        ${(!lang && pathName?.includes(`${route.slug}`)) || (lang && locale === 'pt' && route.slug === '/pt') || (locale !== 'pt' && pathName.includes(route.slug)) ? 'bg-gray-700 text-white' : 'text-gray-200'}
                        hover:bg-gray-800 hover:text-white
                        group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {route.name}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )

    case 'skeleton':
      return (
        <div className={`m-0 ${className ?? ''} ${styles}`}>
          {!icon ? (
            children
          ) : (
            <div className="flex gap-2">
              <Icon
                className={`shadowing w-[1.5rem!important] h-[1.5rem!important]  text-white ${variant === 'nav' ? '' : 'hover:text-ledax-400'}`}
              />
              {children}
            </div>
          )}
        </div>
      )

    default:
      return (
        <button
          disabled={disabled}
          type={submit ? 'submit' : 'button'}
          className={`m-0 ${className ?? ''} ${styles}`}
          onClick={onClick}
        >
          {!icon ? (
            children
          ) : variant === 'form' ? (
            <div className="flex justify-center items-center w-full gap-2">
              {children}
              <Icon
                className={`shadowing w-[1rem!important] h-[1rem!important]  text-white`}
              />
            </div>
          ) : (
            <div className="flex gap-2">
              <Icon
                className={`shadowing w-[1.5rem!important] h-[1.5rem!important]  text-white ${variant === 'nav' ? '' : 'hover:text-ledax-400'}`}
              />
              {children}
            </div>
          )}
        </button>
      )
  }
}
