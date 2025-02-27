import React from 'react'
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
            {/* Grid Container */}
            <div className="container mx-auto mt-8 sm:-mt-12 xl:-mt-20">
                {/* grid */}
                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5 gap-y-24 xl:px-0'>
                    {/* grid item */}
                    {course.prop.attributes.map((attribute, i) => (
                        <div className="xl:h-[600px] flex justify-center items-center" key={attribute.id}>
                            <Reveal keyframes={bottomToTopAnimation} delay={i * 100}>
                                <div className="highlighted-box w-72 bg-[#84f5f5] p-3 rounded-[2rem] text-center relative shadow-[0_8px_16px_#98ADBD,0_4px_8px_#84f5f5] transition-shadow duration-200 hover:shadow-[0_12px_24px_rgba(0,0,0,0.5),0_6px_12px_#84f5f5]">
                                    <div className="circle flex items-center justify-center w-[110px] h-[110px] bg-[#f4f3ee] rounded-full absolute -top-[60px] left-1/2 transform -translate-x-1/2 shadow-[0_8px_16px_#98ADBD,0_4px_8px_#84f5f5] transition-shadow duration-200 z-20 hover:shadow-[0_12px_24px_rgba(0,0,0,0.5),0_6px_12px_#84f5f5]">
                                        <video
                                            src={attribute.gif}
                                            width={95}
                                            height={95}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="rounded-full border-4 border-[#84f5f5]"
                                        />

                                    </div>
                                    <div className="main">
                                        <div className="innerBox relative bg-[#f4f3ee] rounded-[2rem] mx-auto text-center leading-8 text-sm shadow-[0_-8px_16px_#98ADBD,-8px_8px_16px_#98ADBD,8px_8px_16px_#98ADBD] transition-shadow duration-200 z-10">
                                            <p className="translate-y-10 font-DanaMedium min-h-52 p-2">
                                                {attribute.attribute}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Features
