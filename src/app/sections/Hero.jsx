import React from 'react'
import { GiftIcon, CursorArrowRaysIcon } from '@heroicons/react/24/solid'
import "aos/dist/aos.css";
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


const topToBottomAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const topToBottomSmall = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const ltrAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, 0px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const rtlAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(200px, 0px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function Hero(course) {
  return (
    <section className='hero bg-gray py-12 xl:pt-12 xl:pb-0 overflow-hidden font-DanaMedium'>
      <div className='container mx-auto h-full'>
        {/* Text & Video */}
        <div className='flex flex-col xl:flex-row gap-10 items-center justify-between h-full py-10 xl:py-20'>
          {/* Text */}
          <div className='text-center xl:text-start space-y-3 '>
            {/* Badge */}
            <Reveal keyframes={topToBottomAnimation}>
              <div className='flex items-center bg-white py-2.5 px-5 w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0'>
                <GiftIcon className='w-5 h-5 sm:w-6 sm:h-6 text-accent' />
                <span className='text-sm sm:text-base text-[#9ab4b7]'>دارای هدیه</span>
              </div>
            </Reveal>
            <Reveal keyframes={topToBottomSmall} delay={500}>
              {/* Title */}
              {/* <div className='text-5xl sm:text-6xl text-zinc-700 font-semibold'>Code Academy</div> */}
              <div className='text-5xl sm:text-6xl text-zinc-700 font-semibold'>{course.prop.title}</div>
              {/* Summary */}
              <div className='max-w-[500px]'>
                {/* این دوره بر مبنای استانداردی آمریکایی جهت آموزش بزنامه نویس کامپیوتری است که توان خودآموزی و بروزرسانی خود را در برابر تکنولوژی های جدید را داشته باشد.*/}
                {course.prop.description}
              </div>

            </Reveal>
            {/* Btn */}
            <Reveal keyframes={topToBottomSmall} delay={1000}>
              <div className='flex items-center bg-accent py-3 px-6 w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0'>
                <CursorArrowRaysIcon className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
                <span className='text-sm sm:text-base font-medium text-white'>اولین جلسه رو رایگان شرکت کن!</span>
              </div>
            </Reveal>

          </div>

          {/* Video */}
          <div className='flex-1 sm:w-auto'>
            <Reveal keyframes={bottomToTopAnimation}>
              <video className='border-b-4 border-accent shadow-xl '>
                <source src={course.prop.video} type="video/mp4" />
              </video>
            </Reveal>
          </div>


        </div>

      </div>

    </section>
  )
}

export default Hero