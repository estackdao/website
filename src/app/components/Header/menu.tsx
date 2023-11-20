"use client"

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'

type ActiveLinkProps = {
  href: string
  children: React.ReactNode
}


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function ActiveLink({ href, children }: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className='py-3 px-1'>
      <div className={isActive ? 'text-[#222C3C] font-bold' : 'text-[#222C3C] font-normal'}>
        {children}
      </div>
    </Link>
  )
}

export function ActiveLink_Menu({ href,children }: ActiveLinkProps){
  const pathname = usePathname();
  const isActive = pathname === href;

  return(
    <>
      <Disclosure.Button
         key="home"
         as="a"
         href={href}
         className={classNames(
          isActive ? 'bg-gray-900 text-white' : 'text-[#222C3C] hover:bg-gray-700 hover:text-white',
           'block rounded-md px-3 py-2 text-base font-medium'
         )}
         aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </Disclosure.Button>
    </>
  )
}

export function MobileMenu(){
  
  
  return(
    <Disclosure.Panel className="md:hidden">
      <div className="space-y-2 px-2 pb-3 pt-6 sm:px-2">
        <ActiveLink_Menu href='/'>
          <div className='text-lg'>
            Home
          </div>
        </ActiveLink_Menu>
        <ActiveLink_Menu href='/work'>
          <div className='text-lg'>
            Work
          </div>
        </ActiveLink_Menu>
        <ActiveLink_Menu href='/about'>
          <div className='text-lg'>
            About
          </div>
        </ActiveLink_Menu>
      </div>
    </Disclosure.Panel>
  )

}

