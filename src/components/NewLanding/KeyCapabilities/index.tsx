import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'
import Button from '@/components/ui/Button'

import keyslide from "@/public/images/new-landing/key Slider6 1.png"
import keybg from "@/public/images/new-landing/kery bg.png"
import tdmatch from "@/public/images/new-landing/traditional match.png"
import gradt from "@/public/images/new-landing/grad-core-top.png"

const KeyCapabilities = () => {
  return (

    <>
      <div className='gradientKeyCap pt-32 '>
        <Text as='h1' className='text-[50px] text-white text-center font-inter leading-[48px] mb-20'>Key Capabilities</Text>

        <div className="max-w-[1200px] min-h-[600px] mob:min-h-full rounded-[50px] mx-auto mt-10 bg-white flex flex-wrap items-center mob:mx-5">
          <div className="w-[50%] py-10 tab:w-full pl-10 pr-5 tab:px-5">
            <Text className='text-[#30434D] text-[32px] font-semibold leading-[100%] font-inter  ' > AI-Powered Strategic Matching</Text>
            <Text className='text-[#30434D] text-[18px] leading-[26px] font-inter ml-2 mt-[17px]'>Connects organizations, businesses, and associations <br />
              <span className="font-bold"> based on expertise, industry needs, and operational goals.</span>
            </Text>
          </div>

          <div className="w-[50%] py-10 px-5 tab:w-full bg-[#235220] h-full min-h-[600px] tab:min-h-full rounded-r-[50px] tab:rounded-t-[0px] mob:rounded-b-[50px] flex items-center justify-center">
            <Image src={keyslide} alt="" width={494} height={275} />
          </div>
        </div>

        {/* why merit */}
        <div className="relative min-h-screen  pb-32 ">
          <Image className='object-cover absolute w-full h-full' src={keybg} alt="" />

          <Text as='h1' className='text-[50px] text-white text-center font-inter leading-[48px] pt-[180px]'>Why MERIT?</Text>

          <div className="flex tab:flex-wrap justify-center gap-[15px] pt-[120px] mob:px-5">
            <Image className='w-[62px] h-[62px]' src={tdmatch} alt="" />
            <div >
              <Text as='h1' className='text-[40px] text-white text-center font-inter leading-[48px] '>Beyond Traditional Matchmaking</Text>
              <Text className='text-[18px] text-white text-center  font-inter leading-[26px] pt-[40px] mx-auto max-w-[671px]'>
                <span className="font-bold">MERIT is not just a business connection tool</span>—it is an AI-driven intelligence hub that helps organizations make smarter strategic decisions across industries.</Text>
            </div>
          </div>

          <div className="flex tab:flex-wrap mob:flex-col-reverse justify-center gap-[16px] pt-[120px] mob:px-5">
            <div >
              <Text as='h1' className='text-[40px] text-white text-center font-inter leading-[48px] '> Empowering Associations & Networks</Text>
              <Text className='text-[18px] text-white text-center  font-inter leading-[26px] pt-[40px] mx-auto max-w-[751px]'>
                MERIT strengthens <span className="font-bold"> associations, nonprofit organizations, and professional groups </span>
                by creating <span className="font-bold">stronger member engagement and operational insights.</span></Text>
            </div>
            <Image className='w-[62px] h-[62px] mob:mx-auto' src={tdmatch} alt="" />

          </div>

          <div className="flex tab:flex-wrap justify-center gap-[16px] pt-[120px] mob:px-5">
            <Image className='w-[62px] h-[62px]' src={tdmatch} alt="" />

            <div >
              <Text as='h1' className='text-[40px] text-white text-center font-inter leading-[48px] '> AI-Powered Efficiency</Text>
              <Text className='text-[18px] text-white text-center  font-inter leading-[26px] pt-[40px] mx-auto max-w-[682px]'>
                <span className="font-bold"> Reduces inefficiencies in supplier contracting, business partnerships, and industry networking, </span> ensuring faster, more precise decision-making.</Text>
            </div>

          </div>

          <div className="flex  tab:flex-wrap justify-center mob:flex-col-reverse gap-[16px] pt-[120px] mob:px-5">
            <div >
              <Text as='h1' className='text-[40px] text-white text-center font-inter leading-[48px] '> Scalable & Adaptive</Text>
              <Text className='text-[18px] text-white text-center  font-inter leading-[26px] pt-[40px] mx-auto max-w-[678px]'>
                MERIT’s <span className="font-bold"> modular, API-driven system </span> allows organizations to <span className="font-bold">integrate exactly what they need</span> to improve their operations and engagement.
              </Text>
            </div>
            <Image className='w-[62px] h-[62px] mob:mx-auto' src={tdmatch} alt="" />

          </div>




        </div>


      </div>

      {/* unlock powwer */}
      <div className="relative bg-[#30434D] pb-20 00px] mx-auto mob:px-5">

        <Image src={gradt} alt="gradt" className='absolute top-[-299px] w-full z-0' />

        <Text as='h1' className='text-[40px] text-white text-center font-inter leading-[48px] mb-[50px] relative z-10'>
          Unlock the Power of <span className="text-accentGreen">AI-Driven Business Intelligence</span>
        </Text>
        <Text className='text-[18px] text-white text-center  font-inter leading-[26px]  mx-auto max-w-[1200px] relative z-10'>
          The future of <span className="font-bold"> business, workforce, and association growth is data-driven, predictive, and automated </span> and MERIT is leading the way.
          By <span className="font-bold"> focusing on organizational intelligence rather than basic connections, </span> MERIT creates
          <span className="font-bold"> strategic partnerships and industry-wide efficiencies that drive real impact. </span>
        </Text>

        <Text as='h1' className='text-[40px] mob:text-[35px] text-white text-center font-inter leading-[36px] mob:leading-[40px] mt-[70px]'>
          Ready to Elevate Your Organization? <br />
          <span className="text-[24px] leading-[32px]"> <span className="text-accentGreen"> Sign up </span> today to explore MERIT’s capabilities.</span>
        </Text>

        {/* form */}
        <form className="max-w-[671px] mx-auto mt-[50px] rounded-[20px] border border-[#4FB848] bg-white  space-y-[40px] px-[30px] py-[60px]">

          <div className="flex tab:flex-wrap gap-[24px]">
            <div className="w-1/2 tab:w-full space-y-[23px]">
              <Text className='font-inter text-[18px] text-[#30434D]'>First Name</Text>
              <input type="text" placeholder='First Name' className='w-full border border-[#4FB848] h-[61px] px-3 rounded-[12px]  outline-none text-[18px] text-[#30434D] placeholder:text-[18px] placeholder:text-[#30434D]' />
            </div>
            <div className="w-1/2 tab:w-full space-y-[23px]">
              <Text className='font-inter text-[18px] text-[#30434D]'>Last Name</Text>
              <input type="text" placeholder='Last Name' className='w-full border border-[#4FB848] h-[61px] px-3 rounded-[12px]  outline-none text-[18px] text-[#30434D] placeholder:text-[18px] placeholder:text-[#30434D]' />
            </div>
          </div>

          <div className="w-full space-y-[23px]">
            <Text className='font-inter text-[18px] text-[#30434D]'>Email</Text>
            <input type="text" placeholder='Email' className='w-full border border-[#4FB848] h-[61px] px-3 rounded-[12px]  outline-none text-[18px] text-[#30434D] placeholder:text-[18px] placeholder:text-[#30434D]' />
          </div>

          <div className="w-full space-y-[23px] pb-6">
            <Text className='font-inter text-[18px] text-[#30434D]'>Message</Text>
            <textarea
              placeholder='Leave us a message...'
              className='w-full border border-[#4FB848] h-[222px] px-3 pt-3 rounded-[12px] outline-none text-[18px] text-[#30434D] placeholder:text-[18px] placeholder:text-[#30434D] resize-none'
            />
          </div>

          <Button type='submit' className='bg-[#4FB848] w-full rounded-[12px] h-[61px] text-[18px] leading-[26px] text-white font-inter '>Send message</Button>

        </form>

      </div>
    </>
  )
}

export default KeyCapabilities
