import React from 'react'
import { ClockIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

function Features(course) {
    console.log(course.prop);

    return (
        <section id="feature" className='pt-20'>
            <div className='bg-accent xl:container max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-5 xl:px-0 relative py-5 md:pb-16 md:pt-5 flex items-center xl:items-start -z-10'>
                <div className='container mx-auto'>
                    {/* Text */}
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
            </div>
            {/* Grid Container */}
            <div className="container mx-auto mt-8 sm:-mt-12 xl:-mt-20">
                {/* grid */}
                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5 xl:px-0'>
                    {/* grid item */}
                    {
                        course.prop.attributes.map((attribute, i) => (
                            <div className='bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center mb-5 font-DanaMedium tracking-tight md:tracking-normal text-base md:text-lg' key={i}>
                                {/* grid icon */}
                                <span className='w-12 h-12 mb-[15px] text-accent-tertiary'><CodeBracketIcon /></span>
                                {/* grif item title */}
                                <h3 className='mb-[10px] text-2xl font-semibold text-zinc-600'>{attribute.title}</h3>
                                {/* grid item desc */}
                                <p className=' tracking-tighter'>
                                    {attribute.attribute}
                                </p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Features