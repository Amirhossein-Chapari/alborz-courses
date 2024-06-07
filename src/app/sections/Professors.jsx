import React from 'react'
import Image from 'next/image'
import { UserCircleIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

// const professor = [
//     {
//         id: 1,
//         imgUrl: ,
//         name: "بهزاد فرید اقدم",
//         role: "لورم ایپسوم متن ساختگی",
//         desc: "با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
//     },
//     {
//         id: 1,
//         imgUrl: ,
//         name: "بهزاد فرید اقدم",
//         role: "لورم ایپسوم متن ساختگی",
//         desc: "با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
//     },
// ]

function Professors(course) {

    return (
        <section id='professors' className='pt-20 xl:mt-32 pb-20 md:pb-40 rounded-b-3xl  md:rounded-b-[100px] shadow-md'>
            <div className='container mx-auto'>
                <h1 className='my-5 xl:my-10 font-MorabbaMedium'>اساتید</h1>
                <div className='flex flex-col md:flex-row gap-10 '>
                    <div className='flex-1 flex flex-col md:flex-row md:justify-between'>
                        {
                            // console.log(course)
                            course.prop.teachers.map((teacher, i) => (
                                // console.log(teacher),
                                <div className='flex flex-col xl:flex-row items-center gap-[30px] xl:gap-2' key={i}>
                                    <div className='flex-1'>
                                        {/* <Image src={teacher.image} width={400} height={200} className='rounded-md shadow-custom1' alt='professorPicture'></Image> */}
                                        <img src={teacher.image} width={200} height={200} className='rounded-md shadow-custom1' alt="professorPicture" />
                                    </div>
                                    {/* Name & Desc */}
                                    <div className='flex-1 flex flex-col'>
                                        <h4 className='h4 mb-[10px] flex items-center gap-2'>
                                            <UserCircleIcon className='w-8 h-8 text-accent' />
                                            <span className='font-DanaDemiBold w-64'>{teacher.name}</span>
                                        </h4>
                                        <div className='text-[#9ab4b7] mb-[20px] flex items-center gap-2 font-DanaMedium'>
                                            <CodeBracketIcon className='xl:w-7 h-7 text-accent' />
                                            {teacher.field}
                                        </div>
                                        {/* <p className='mb-[26px] max-w-[320px] font-Dana tracking-tighter'>{teacher.description}</p> */}
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Professors