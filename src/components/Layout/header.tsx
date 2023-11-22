'use client'

import * as React from 'react'
import Link from 'next/link'
import { LogoIcon } from '../Common/icon'
import { Disclosure } from '@headlessui/react'

export default function Header() {
  return (
    <div className='px-4 md:px-12 py-6 min-h-full'>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className='flex items-center justify-center space-x-3 cursor-pointer'>
              <Link href='/'>
                <div className='w-6'>
                  <LogoIcon />
                </div>
              </Link>
              <Link href='/'>
                <div className='text-2xl text-[#222C3C] font-brand'>
                  Estack
                </div>
              </Link>
              <div className='grow'>
              </div>
              <nav>
                <div className='md:flex items-center justify-center space-x-12 hidden text-[#222C3C]'>
                  <Link href='https://docs.estackdao.com' target='_blank'>
                    <div className='text-lg font-text font-medium'>
                      Docs
                    </div>
                  </Link>
                  <Link href='https://github.com/estackdao' target='_blank'>
                    <div className='text-lg font-text font-medium'>
                      Github
                    </div>
                  </Link>
                  <Link href='https://twitter.com/estackdao' target='_blank'>
                    <div className='text-lg font-text font-medium'>
                      Twitter
                    </div>
                  </Link>
                </div>
              </nav>
              <div className='pl-10'>
                <Link href='mailto:hello@estackdao.com'>
                  <div className='rounded-3xl bg-[#222C3C] px-2 md:px-4 py-2 text-base text-white'>
                    Contact Us
                  </div>
                </Link>
              </div>
              <div className="flex md:hidden">
                {/* Mobile menu button */}
              </div>
            </div>
          </>)}
      </Disclosure>
    </div>
  )


}