import * as React from 'react'
import { useEffect, useRef } from 'react';
import Header from './components/Header/header';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="w-full">
      <div className='flex flex-col'>
      {/* section 1 - Hero */}
        <div className='bg-[#E2E3E8] min-h-screen' id="section1">
            <div className='max-w-7xl mx-auto'>
              <Header/>
              <div className='mt-10'>
                <Image 
                  src='/images/hero_image.png' 
                  width={712}
                  height={462}
                  alt="Picture of the author"
                  className='mx-auto'
                />
                <div className='mt-10 text-center text-lg text-[#222C3C] font-text'>
                  Building the Permissionless, Trustless and Interoperable intersection layer for Ethereum LST infrastructure.
                </div>
                <div className='flex items-center justify-center space-x-6 mt-10 font-text font-medium'>
                  <Link href='https://docs.estackdao.com' target='_blank'>
                    <div className='rounded-2xl bg-[#222C3C] px-8 py-3 text-white'>
                      Read Doc
                    </div>
                  </Link>
                  <Link href='https://twitter.com/estackdao' target='_blank'>
                    <div className='rounded-2xl border-[1px] border-[#222C3C]/30 px-8 py-3 text-[#222C3C]'>
                      Follow Us
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* section 2 - Lossless */}
          <div className='bg-[#222C3C] min-h-screen' id="section2">
            <div className='justify-center'>
            </div>
          </div>
          <div>
        </div>
      </div>
    </main>
  )
}
