import * as React from 'react'
import Link from 'next/link'
import { MediumIcon,TwitterIcon,GithubIcon,EthereumIcon } from '../Common/icon'

export default function Footer(){
  return(
    <div className='bg-[#222C3C]'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='flex items-center'>
          <div className='text-[#DCE6FF] text-lg font-text'>
            ©️ 2023 Estack
          </div>
          <div className='grow'></div>
          <div className='flex items-center justify-center space-x-3 md:space-x-8'>
            <Link href='https://github.com/estackdao' target='_blank'>
              <div className='w-5'>
                <GithubIcon/>
              </div>
            </Link>
            <Link href='https://github.com/estackdao' target='_blank'>
              <div className='w-5'>
                <EthereumIcon/>
              </div>
            </Link>
            <Link href='https://twitter.com/estackdao' target='_blank'>
              <div className='w-5'>
                <TwitterIcon/>
              </div>
            </Link>
            <Link href='https://github.com/estackdao' target='_blank'>
              <div className='w-5'>
                <MediumIcon/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}