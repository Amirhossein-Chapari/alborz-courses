import React from 'react'

function Newsletter() {
    return (
        <section id='newsletter' className='bg-accent md:h-[400px] py-12 mt-32 relative '>
            <div className='px-[1.5rem] xl:px-[8rem] w-full flex items-center justify-center h-full'>
                <div className='flex flex-col lg:flex-row lg:w-full gap-5 justify-center lg:justify-between lg:items-center lg:text-center lg:gap-x-[58px]'>
                    {/* Text */}
                    <div className='space-y-2 z-10 flex flex-col items-center lg:items-start tracking-tight sm:tracking-normal'>
                        <h1 className='h1 text-white mb-2 font-MorabbaMedium mx-auto lg:mx-0 tracking-wide'>البرز خاطره ی خوش آموزش</h1>
                        <h4 className='text-xs sm:text-base text-white font-DanaDemiBold'>برای اطلاع از آخرین تخفیف ها، ما را در شبکه های اجتماعی دنبال کنید. </h4>
                        <span className='text-xs sm:text-base text-white font-DanaMedium'>شمارتو برامون بنویس تا نشانی شبکه های اجتماعی البرز برات پیامک شه!</span>
                    </div>
                    {/* Form */}
                    <form action="#" className='px-5 flex justify-center items-center font-DanaMedium'>
                        <div className='flex flex-col md:flex-row relative gap-y-4 group text-xs sm:text-base'>
                            <input type="number" name='phoneNumber' placeholder='شماره تلفن همراه' className='rounded-full px-20 sm:w-[350px] md:w-[450px] h-12 md:h-[66px] pr-[30px] focus:ring-accent transition duration-500'/>
                            <button className='px-10 sm:px-16 md:px-20 md:w-auto md:h-[58px] h-10 m-1 bg-accent rounded-full absolute left-0 group-hover:bg-accent-secondary text-white transition-all duration-500'>ثبت</button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Newsletter