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
    <section id='intro' className='hero bg-gray pt-2 pb-12  xl:pt-12 xl:pb-0 overflow-hidden font-DanaMedium'>
      <div className='container mx-auto h-full'>
        {/* Text & Video */}
        <div className='flex flex-col xl:flex-row gap-10 items-center justify-between h-full py-10 xl:py-20'>
          {/* Text */}
          <div className='flex-1 text-center xl:text-start space-y-3'>
            {/* Badge */}
            <Reveal keyframes={topToBottomAnimation}>
              <div className='flex items-center bg-white py-2.5 px-5 w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0 group'>
                <GiftIcon className='w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:-rotate-12 group-hover:scale-125 transition duration-500' />
                <span className='text-sm sm:text-base text-[#9ab4b7] group-hover:text-primary transition duration-500'>دارای هدیه</span>
              </div>
            </Reveal>
            <Reveal keyframes={topToBottomSmall} delay={500}>
              {/* Title */}
              <div className='text-5xl sm:text-6xl text-zinc-700 font-semibold'>{course.prop.title}</div>
              {/* Summary */}
              <div className='max-w-[500px]'>
                {course.prop.description}
              </div>

            </Reveal>
            {/* Btn */}
            <Reveal keyframes={topToBottomSmall} delay={1000}>
              <div className='flex items-center bg-accent py-3 px-6 w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0 group'>
                <CursorArrowRaysIcon className='w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-x-1 transition duration-500' />
                <span className='text-sm sm:text-base font-medium text-white'>اولین جلسه رو رایگان شرکت کن!</span>
              </div>
            </Reveal>

          </div>

          {/* Video */}
          <div className='flex-1 sm:w-auto'>
            <Reveal keyframes={bottomToTopAnimation}>
              <video controls className='border-b-4 border-accent shadow-xl w-full'>
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