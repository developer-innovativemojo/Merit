import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'

import bg from "@/public/images/new-landing/Background Image.png"
import cont from "@/public/images/new-landing/Container.png"
import Navbar from '../NavbarLanding'

const HeroSection = () => {
  return (
    <div className=' min-h-[863px] relative flex justify-center items-center px-5 overflow-hidden'>
      <Navbar/>

        <div className=" flex justify-center items-center h-full">
        <div className=" mx-auto space-y-[75px] relative z-20">
            <Text as='h1' className='text-center font-inter text-[#30434D]'>MERIT – The <span className='text-accentGreen'>AI-Driven Business</span> Intelligence 
           <br /> & Optimization Platform</Text>

           <Text className='text-accentGreen text-center font-bold text-[24px] font-inter'>Revolutionizing Business, Workforce, and Association Success</Text>
        </div>
      <Image className='absolute bottom-0 mx-auto' src={bg} alt="bg" width={1092} height={358} />
      <Image className='absolute z-0 mx-auto mt-10' src={cont} alt="bg" width={1493} height={84} />
        </div>
    </div>
  )
}

export default HeroSection
