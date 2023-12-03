'use client'

import * as React from 'react'
import Header from '@/components/Layout/header';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Layout/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import "swiper/css";
import { useState } from 'react';

export default function SwiperPage() {

  const [showFooter, setShowFooter] = useState(false);
  const swiperRef = React.useRef<any>(null);

  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current.swiper;
    if (swiperInstance.isEnd) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  return (
    <div className='flex flex-col h-full'>

      <Swiper
        ref={swiperRef}
        // install Swiper modules
        modules={[Mousewheel]}
        direction={'vertical'}
        simulateTouch={false}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{ releaseOnEdges: true }}
        onSlideChange={handleSlideChange}
        speed={800}
        threshold={400}
        className='w-full h-screen'
      >

        <SwiperSlide>
          {/* section 1 - Hero */}
          <div className='bg-[#E2E3E8] relative h-screen'>
            <div className='w-full md:max-w-7xl mx-auto'>
              <Header />
              <div className='mt-24 px-8 py-12 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:mt-6'>
                <Image
                  src='/images/hero_image.png'
                  width={712}
                  height={462}
                  alt="Picture of the author"
                  className='mx-auto'
                />
                <p className='mt-10 md:mt-4 text-center text-xl text-[#222C3C] font-text'>
                  Building the Permissionless, Trustless and Interoperable intersection middleware for Ethereum LST infrastructure.
                </p>
                <div className='flex items-center justify-center space-x-6 mt-12 md:mt-12 font-text font-medium'>
                  <Link href='https://docs.estackdao.com' target='_blank'>
                    <div className='rounded-3xl bg-[#222C3C] px-4 md:px-8 py-3 text-white'>
                      Read Doc
                    </div>
                  </Link>
                  <Link href='https://twitter.com/estackdao' target='_blank'>
                    <div className='rounded-3xl border-[1px] border-[#222C3C]/30 px-4 md:px-8 py-3 text-[#222C3C]'>
                      Follow Us
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* section 2 - Lossless */}
          <div className='bg-[#222C3C] relative h-screen'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <div className='text-[6rem] md:text-[18rem] font-title tracking-wide leading-none'>
                <span className='bg-clip-text text-transparent bg-lossless bg-cover bg-no-repeat'>
                  LOSSLESS
                </span>
              </div>
              <div className='text-white/70 text-center md:text-left mt-12 md:mt-6 text-xl font-text font-light leading-relaxed'>
                Through enhancing Estack's novel on-chain matching mechanism, the platform facilitates lossless swaps among LST tokens. This enhancement maximizes liquidity for LST, minimizes transactional friction, and fosters growth for small and medium-sized LST protocols. Ultimately, this contributes to Ethereum's decentralization goals.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* section 3 - Trustless */}
          <div className='bg-[#F7CB5A] relative h-screen'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <div className='text-[5.5rem] md:text-[18rem] font-title tracking-wide leading-none'>
                <span className='bg-clip-text text-transparent bg-trustless bg-cover bg-no-repeat'>
                  TRUSTLESS
                </span>
              </div>
              <div className='text-[#222C3C] text-center md:text-left mt-12 md:mt-6 text-xl font-text font-light leading-relaxed'>
                Estack employs a zk oracle based on EIP-4788 to ensure secure and decentralized data availability between the consensus layer and the execution layer. This eliminates the dependence on centralized intermediaries, consequently diminishing potential security risks and fostering greater trust within the LST ecosystem.              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* section 4 - Seamless */}
          <div className='bg-[#6C86AD] relative h-screen'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <div className='text-[6rem] md:text-[18rem] font-title tracking-wide leading-none'>
                <span className='bg-clip-text text-transparent bg-seamless bg-cover bg-no-repeat'>
                  SEAMLESS
                </span>
              </div>
              <div className='text-white text-center md:text-left mt-12 md:mt-6 text-xl font-text font-light leading-relaxed'>
                Estack offers standardized implementations that seamlessly integrate LST into Layer 2 gas tokens, lending/borrowing, CDP stablecoins, and various other use cases. It also facilitates access to services like DVT, Restaking, and more, thereby significantly enhancing the security and efficiency of the LST ecosystem.              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {showFooter && <Footer />}
    </div>
  )
}