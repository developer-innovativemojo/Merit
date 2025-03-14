import React from 'react'
import Image from 'next/image'

import bg from "@/public/images/new-landing/aboutbg.png"
import Text from '@/components/ui/Text'

const AboutSection = () => {
    return (
        <div className='min-h-[493px] flex items-center justify-center relative'>
            <Image className='absolute z-[0] object-cover w-full' src={bg} alt="" />

            <div className="max-w-[990px] w-full mx-auto flex flex-wrap justify-between gap-8 items-center mob:px-5  ">
                <Text as='h1' className="text-accentGreen text-[50px] font-inter">About</Text>

                <Text className='max-w-[683px] w-full font-inter text-[#30434D] text-[18px] leading-[26px]'>MERIT is a <span className="font-bold">next-generation Business Intelligence & Optimization Platform</span> designed to enhance
                    <span className="font-bold"> strategic decision-making, streamline operations, and strengthen organizational networks.</span> By leveraging
                    <span className="font-bold">AI-driven insights, predictive analytics, and automation,</span> MERIT connects businesses, associations, suppliers, and industry leaders to
                    <span className="font-bold">maximize growth, efficiency, and impact.</span></Text>
            </div>
        </div>
    )
}

export default AboutSection
