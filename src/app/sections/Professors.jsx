import React from 'react'
import Image from 'next/image'
import { UserCircleIcon, CodeBracketIcon } from '@heroicons/react/24/outline'


function Professors(course) {

    return (
        // <section id='professors' className='pt-20 pb-20 md:pb-40 rounded-b-3xl  md:rounded-b-[100px] shadow-md'>
        <section id='professors' className='pt-20 pb-20'>
            <div className='container mx-auto'>
                <h1 className='my-5 font-MorabbaMedium'>اساتید</h1>
                {/* <div className='flex flex-col md:flex-row gap-10 '> */}
                <div className='flex flex-col md:justify-between gap-y-5'>
                    {
                        // console.log(course)
                        course.prop.teachers.map((teacher, i) => (
                            // console.log(teacher),
                            <div className='flex flex-col xl:flex-row items-center gap-x-10' key={i}>

                                {/* Mobile size */}
                                <div className='container flex xl:hidden px-0 gap-5 mb-5'>
                                    <div className='rounded-full p-1 border-2 border-accent'>
                                        <img src={teacher.image} width={140} height={140} className='min-w-[100px] rounded-full' alt="professorPicture" />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <h4 className='h4 mb-[10px] flex items-center gap-2 pt-5'>
                                            <UserCircleIcon className='w-6 h-6 md:w-8 md:h-8 text-accent' />
                                            <span className='font-DanaDemiBold w-64'>{teacher.name}</span>
                                        </h4>
                                        <div className='text-[#9ab4b7] mb-[20px] flex items-center gap-2 font-DanaMedium'>
                                            <CodeBracketIcon className='w-6 h-6 md:w-8 md:h-8 text-accent' />
                                            {teacher.field}
                                        </div>
                                    </div>
                                </div>

                                {/* Descktop size */}
                                <div className='hidden xl:flex items-center justify-center'>
                                    <img src={teacher.image} width={1100} height={1100} className='rounded-md shadow-custom1' alt="professorPicture" />
                                </div>

                                {/* Name & Desc */}
                                <div className='flex flex-col justify-center items-start'>
                                    <h4 className='h4 hidden xl:flex items-center gap-2 pt-5 mb-[10px]'>
                                        <UserCircleIcon className='w-8 h-8 text-accent' />
                                        <span className='font-DanaDemiBold w-64'>{teacher.name}</span>
                                    </h4>
                                    <div className='hidden xl:flex items-center gap-2  text-[#9ab4b7] mb-[20px] font-DanaMedium'>
                                        <CodeBracketIcon className='xl:w-7 h-7 text-accent' />
                                        {teacher.field}
                                    </div>
                                    <p className='mb-[26px] font-DanaMedium text-base md:text-lg'>{teacher.description}</p>
                                </div>

                            </div>
                        ))

                    }
                </div>
                {/* </div> */}

            </div>
        </section>
    )
}

export default Professors