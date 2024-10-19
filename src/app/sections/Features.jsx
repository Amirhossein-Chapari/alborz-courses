import React from 'react'
import { ClockIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import infoGif from '../../../public/images/chat (1).gif'
// Animation
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const bottomToTopAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function Features(course) {
    console.log(course.prop);

    return (
        <section id="feature" className='pt-20'>
            {/* <div className='bg-accent xl:container max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-5 xl:px-0 relative py-5 md:pb-16 md:pt-5 flex items-center xl:items-start -z-10'>
                <div className='container mx-auto'>
                    <div className='flex flex-col xl:flex-row items-center xl:mb-[60px]'>
                        <h1 className='font-bold text-white flex-1 mb-4 xl:mb-0 text-center xl:text-right leading-tight'>
                            <span className='font-MorabbaMedium'>ویژگی های دوره</span>
                            <p className='font-sans'>{course.prop.title}</p>
                        </h1>
                        <span className='text-white flex-1 text-center xl:text-right max-w-2xl xl:max-w-none font-DanaMedium pb-2 tracking-tight text-base md:text-lg'>
                            {course.prop.about}
                        </span>
                    </div>
                </div>
            </div> */}

           


            {/* Grid Container */}
            <div className="container mx-auto mt-8 sm:-mt-12 xl:-mt-20">
                {/* grid */}
                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5 gap-y-24 xl:px-0'>
                    {/* grid item */}
                    {
                        course.prop.attributes.map((attribute, i) => (
                            <div className='xl:h-[700px] flex justify-center items-center' key={i}>
                                <Reveal
                                    keyframes={bottomToTopAnimation}
                                    delay={i * 100}
                                >
                                    <div className="highlighted-box w-72 bg-[#84f5f5] p-3 rounded-2xl text-center relative shadow-[0_8px_16px_#98ADBD,0_4px_8px_#84f5f5] transition-shadow duration-200 hover:shadow-[0_12px_24px_rgba(0,0,0,0.5),0_6px_12px_#84f5f5]">
                                        <div className="circle flex items-center justify-center w-[110px] h-[110px] bg-[#f4f3ee] rounded-full absolute -top-[60px] left-1/2 transform -translate-x-1/2 shadow-[0_8px_16px_#98ADBD,0_4px_8px_#84f5f5] transition-shadow duration-200 z-20 hover:shadow-[0_12px_24px_rgba(0,0,0,0.5),0_6px_12px_#84f5f5]">
                                            <div className="innerCircle w-[90px] h-[90px] bg-[#84f5f5] rounded-full mx-auto relative shadow-[0_8px_16px_#98ADBD,0_4px_8px_#84f5f5] border-[5px] border-[#84f5f5] z-30 overflow-hidden">
                                                <Image src={infoGif} />
                                            </div>
                                        </div>
                                        <div className="main">
                                            <div className="innerBox relative bg-[#f4f3ee] rounded-2xl mx-auto text-center leading-8 text-sm shadow-[0_-8px_16px_#98ADBD,-8px_8px_16px_#98ADBD,8px_8px_16px_#98ADBD] transition-shadow duration-200 z-10">
                                                <p className="translate-y-10 font-DanaMedium min-h-72 p-2">
                                                    {attribute.attribute}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>

                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Features
// < div className = 'bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center mb-5 font-DanaMedium tracking-tight md:tracking-normal text-base md:text-lg' key = { i } >
//                                 <span className='w-12 h-12 mb-[15px] text-accent-tertiary'><CodeBracketIcon /></span>
//                                 <h3 className='mb-[10px] text-2xl font-semibold text-zinc-600'>{attribute.title}</h3>
//                                 <p className=' tracking-tighter'>
//                                     {attribute.attribute}
//                                 </p>
//                             </ >