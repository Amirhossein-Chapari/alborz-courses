import React from 'react'
import { ClockIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
// import { motion } from "framer-motion"

function Features(course) {

    // const feature = [
    //     {
    //         id: 1,
    //         icon: "<ClockIcon />",
    //         title: "300+ ساعت",
    //         desc: "چندین زبان برنامه نویسی مطرح از مبتدی تا حرفه ای ، 300 ساعت به علاوه ساعات کارگاهی و حل التمرین بنا به اقتضای اعضای کلاس.",
    //     },
    //     {
    //         id: 2,
    //         icon: ClockIcon,
    //         title: "Front-end",
    //         desc: "",
    //     },
    //     {
    //         id: 3,
    //         icon: ClockIcon,
    //         title: "Back-end",
    //         desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    //     },
    //     {
    //         id: 4,
    //         icon: ClockIcon,
    //         title: "App",
    //         desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    //     },
    // ]

    return (
        <section id="feature" className='pt-20'>
            {/* <motion.div
                id="feature"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                }}
            > */}
                <div className='bg-accent max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10'>
                    <div className='container mx-auto'>
                        {/* Text */}
                        <div className='flex flex-col xl:flex-row items-center xl:mb-[60px]'>
                            <h1 className='font-bold text-white flex-1 mb-4 xl:mb-0 text-center xl:text-right leading-tight'>
                                <span className='font-MorabbaMedium'>ویژگی های دوره</span>
                                <p className='font-sans'>Code Academy</p>
                            </h1>
                            <span className='text-white flex-1 text-center xl:text-right max-w-2xl xl:max-w-none font-DanaMedium'> سرفصل های این دوره به گونه ای طراحی شده است که
                                نیازی به هیچ پیش زمینه و پیش نیازی جهت ورود به این دوره نیست ولی در انتها فرد بنا به علاقه ی خود تبدیل به یک برنامه نویس حرفه ای در حوزه ی Back-end یا Front-end یا توانایی App نویسی برای تمام سیستم عامل ها خواهد بود.
                            </span>
                        </div>
                    </div>
                </div>
                {/* Grid Container */}
                <div className="container mx-auto mt-8 sm:-mt-16 xl:-mt-[100px]">
                    {/* grid */}
                    <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5 xl:px-0'>
                        {/* grid item */}
                        {
                            course.prop.attributes.map((attribute, i) => (
                                <div className='bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[288px] flex flex-col items-center text-center mb-5 font-DanaMedium' key={i}>
                                    {/* grid icon */}
                                    <span className='w-12 h-12 mb-[15px] text-accent-tertiary'><CodeBracketIcon /></span>
                                    {/* grif item title */}
                                    <h3 className='mb-[10px] text-2xl font-semibold text-zinc-600'>{attribute.title}</h3>
                                    {/* grid item desc */}
                                    <p className='max-w-[300px] tracking-tighter'>
                                        {attribute.attribute}
                                    </p>
                                </div>
                            ))
                        }

                    </div>

                </div>
            {/* </motion.div> */}
        </section>
    )
}

export default Features