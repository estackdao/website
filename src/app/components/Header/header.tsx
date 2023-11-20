'use client'

import * as React from 'react'
import { Logo } from '../icon'
import Link from 'next/link'
import { ActiveLink,MobileMenu } from './menu'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  return(
  
    <div className='max-w-7xl mx-auto px-4 md:px-12 py-6 min-h-full'>
      <Disclosure as="nav" className="">
      {({ open }) => (
      <>
       <div className='flex items-center justify-center space-x-6 cursor-pointer'>
         <Link href='/'>
          <div className='w-6'>
            <Logo/>
          </div>
        </Link>
        <Link href='/'>
          <div className='text-2xl text-[#222C3C] font-bold font-brand'>
            Shirley
          </div>
        </Link>
        <div className='grow'>
        </div>
        <nav>
          <div className='md:flex items-center justify-center space-x-10 hidden'>
            <ActiveLink href='/'>
              <div className='text-lg'>
                Home
              </div>
            </ActiveLink>
            <ActiveLink href='/work'>
              <div className='text-lg'>
                Work
              </div>
            </ActiveLink>
            <ActiveLink href='/about'>
              <div className='text-lg'>
                About
              </div>
            </ActiveLink>
          </div>
        </nav>
        
        <Link href='mailto:duanmengq@gmail.com'>
          <div className='rounded-3xl bg-[#222C3C] px-2 md:px-4 py-2 text-base text-white'>
            Let's Connect
          </div>
        </Link>        
        

        <div className="flex md:hidden">
        {/* Mobile menu button */}
          <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md border-[1px] border-[#222C3C] bg-white p-1">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
        </div>
      </div>

      <MobileMenu/>


      </>)}

    </Disclosure>
  </div>
  )

  
}