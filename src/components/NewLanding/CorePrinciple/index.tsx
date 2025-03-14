import React from 'react'
import Image from 'next/image'

import Text from '@/components/ui/Text'

import slide1 from "@/public/images/new-landing/core slide1 (1).png"
import slide2 from "@/public/images/new-landing/core slide 2.png"
import bg from "@/public/images/new-landing/corebg.png"
import gradtop from "@/public/images/new-landing/grad-core-top.png"
import gradright from "@/public/images/new-landing/grad-core-br.png"

const CorePrinciple = () => {
    return (
        <div className='relative px-5 bg-white '>

            <Image className=' w-full left-0 absolute object-cover mx-auto top-[-270px] mob:top-[-3%] z-10' src={gradtop} alt="gradtop" width={1400} />
           <div className="relative overflow-hidden">
           <Image className='h-full w-full absolute object-cover z-0' src={bg} alt="bg" />

            <Image className='  absolute  right-0 bottom-[0px] z-10' src={gradright} alt="gradright" width={337} height={236} />

            <div className="max-w-[1300px] mx-auto pt-10 pb-16 relative z-0">
                <Text as='h1' className="text-accentGreen text-[50px] mb-[54px]">Core Principles of MERIT</Text>

                <div className="flex tab:flex-wrap w-full">
                    <div className="max-w-[480px] space-y-[20px]">
                        <Text className='text-[24px] leading-[32px] font-inter '> <span className="text-[#4FB848] font-bold">M – Matching:</span>  Optimizing connections across processes, systems, and resources to ensure the best outcomes.</Text>
                        <Text className='text-[24px] leading-[32px] font-inter '> <span className="text-[#4FB848] font-bold">E – Efficiency:</span>
                            Streamlining workflows and decision-making through data-driven solutions and technology.​</Text>

                        <Text className='text-[24px] leading-[32px] font-inter '> <span className="text-[#4FB848] font-bold">R – Results:</span>
                            Delivering measurable, impactful solutions that align with organizational goals and objectives.​</Text>

                        <Text className='text-[24px] leading-[32px] font-inter '> <span className="text-[#4FB848] font-bold">I – Innovation:</span>
                            Leveraging cutting-edge tools and strategies to modernize operations and improve performance.​</Text>
                        <Text className='text-[24px] leading-[32px] font-inter '> <span className="text-[#4FB848] font-bold">T – Technology:</span>
                            Harnessing advanced platforms and AI to automate and enhance matching processes across industries.
                        </Text>
                    </div>

                    <div className="flex tab:flex-wrap tab:justify-center items-center w-full mob:h-full">
                        <Image className=' h-full max-h-[322px] w-auto' src={slide1} alt="" width={486} height={272} />
                        <Image className=' h-full max-h-[143px] mb-12 w-auto' src={slide2} alt="" width={257} height={143} />
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default CorePrinciple
