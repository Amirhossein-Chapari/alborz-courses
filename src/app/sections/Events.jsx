import React from 'react'
import Image from 'next/image'


const box = [
    {
        id: 1,
        // imgUrl: ,
        date: "3 خرداد",
        title: "code gap",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
        id: 2,
        // imgUrl: ,
        date: "3 خرداد",
        title: "code gap",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
        id: 3,
        // imgUrl: ,
        date: "3 خرداد",
        title: "code gap",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
]

function Events() {
    return (
        <section id='events'>
            <div className='container mx-auto px-5 pt-20 xl:pt-32'>
                <h2 className='h2 mb-[50px] text-center xl:text-right font-MorabbaMedium'>
                    دورهمی و سمینار
                </h2>
                <div
                    className='flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center
                    xl:justify-between mb-[50px]'
                >
                    {/* Boxes */}
                    {
                        box.map((data, i) => (
                            <div className='flex flex-col max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group' key={i}>
                                {/* Image */}
                                <div className='relative overflow-hidden w-full'>
                                    {/* <Image src={data.imgUrl} className=' group-hover:scale-110 transition duration-500 w-full' alt='aboutEvent'></Image> */}
                                    <div className='bg-accent-tertiary absolute bottom-0 left-0 text-white text-base uppercase tracking-[2.24px] py-[6px] px-[18px] font-semibold'>{data.title}</div>
                                </div>
                                {/* Text */}
                                <div className='px-5 py-6'>
                                    {/* Date */}
                                    <div className='mb-1 font-DanaMedium font-semibold'>{data.date}</div>
                                    {/* Title */}
                                    <h3 className='h3 mb-2.5'>{data.title}</h3>
                                    {/* Desc */}
                                    <p className='font-Dana'>{data.desc}
                                    <br />
                                        <span>
                                            <a href="#" className='underline underline-offset-8 text-[#4c5354] hover:text-accent transition-all duration-300'>بیشتر بخوانید.</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))
                    }


                </div>

            </div>

        </section>
    )
}

export default Events