'use client'
import Logo from '@planets/public/assets/icons/logo.svg'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { MobileMenu } from '@planets/app/components/MobileMenu'

interface Props {
  linkUrls: string[]
}

export const Header = ({ linkUrls }: Props) => {
  const [isHidden, setIsHidden] = useState(true)

  const pathName = usePathname()
  const savedPathName = useRef('')

  useEffect(() => {
    if (savedPathName.current !== pathName) {
      savedPathName.current = pathName
      setIsHidden(true)
    }
  }, [pathName])

  const buttonHandler = () => {
    setIsHidden(!isHidden)
  }

  return (
    <header className="flex flex-col lg:flex-row lg:justify-between md:border-b-[1px] md:border-slate-500">
      <div className="flex border-b-[1px] border-slate-500 md:border-none">
        <div className="flex p-8 w-full lg:justify-between md:justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex p-6 md:hidden lg:p-0  ">
          <MobileMenu clickHandler={buttonHandler} isOpen={!isHidden} />
          {/* <button onClick={buttonHandler}>Menu</button> */}
        </div>
      </div>
      <div className="flex p-6 pt-0 lg:pt-6 md:justify-center md:w-full md:items-center">
        <ul
          className={`${
            isHidden ? 'hidden' : ''
          } gap-8 md:flex md:flex-row w-full md:justify-between md:max-w-[600px] lg:max-w-full lg:justify-end lg:items-center`}
        >
          {linkUrls.map(lk => {
            const isActive = pathName.startsWith(`/planets/${lk}`)
            return (
              <li
                className="flex gap-3 uppercase font-body text-planet-mobile-nav md:text-planet-h4 py-4 md:py-0 border-b-[1px] border-slate-700 w-full md:w-auto md:border-none"
                key={lk}
              >
                <div
                  className={`flex w-5 h-5 rounded-full md:hidden  ${isActive} ? ${lk}-bg : bg-white`}
                ></div>
                <Link
                  href={`/planets/${lk}`}
                  className={isActive ? `text-${lk}` : ''}
                  scroll={false}
                >
                  {lk}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
