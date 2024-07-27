'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'


function Header() {

    const router = useRouter();

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const currentPath = router.asPath.split('#')[0];
        const newPath = `${currentPath}#${targetId}`;
        router.push(newPath, undefined, { shallow: true }).then(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
    };

    const sectionLink = [
        { id: 1, name: "معرفی", link: "intro" },
        { id: 2, name: "ویژگی", link: "feature" },
        { id: 3, name: "اساتید", link: "professors" },
        { id: 4, name: "دورهمی", link: "events" },
        { id: 5, name: "تماس با ما", link: "newsletter" },
    ]

    return (
        <header className='py-8 lg:pt-6 lg:pb-14 font-DanaMedium'>
            <div className={`w-full h-screen -mt-8 bg-black/50 fixed ${isActive ? 'block' : 'hidden'} transition-all duration-300 z-20`}></div>
            <div
                className='container mx-auto lg:relative flex flex-col lg:flex-row
                lg:justify-between'
            >

                {/* { console.log(props)} */}
                {/* Logo */}
                <div className='flex justify-between px-8'>
                    <p className='block lg:hidden'>مجتمع فنی مهندسی البرز</p>
                    <Image
                        src={logo}
                        width={100}
                        height={50}
                        alt="Logo"
                    >
                    </Image>
                </div>

                <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0'>
                    {/* Location */}
                    <div
                        className='hidden lg:flex justify-center items-center gap-x-2 lg:justify-normal'
                    >
                        <MapPinIcon className="h-5 w-5 text-2xl text-accent mb-2" />
                        <a href="#" className='text-secondary hover:text-primary transition-all'>آدرس</a>
                    </div>

                    {/* Phone */}
                    <div
                        className='hidden lg:flex justify-center items-center gap-x-2 lg:justify-normal'
                    >
                        <PhoneIcon className="h-5 w-5 text-2xl text-accent mb-2" />
                        <span dir='ltr' className='text-secondary'>04133323879</span>
                    </div>
                    {/* Button */}
                    {/* <button className='btn btn-sm'></button> */}
                    {/* MobileNav */}
                    <nav
                        className={`mnav bg-white fixed w-[300px] top-0 h-screen ${isActive ? 'right-0' : '-right-[300px]'} shadow-2xl lg:hidden
                        transition-all duration-300 z-20`}
                    >
                        {/* Nav trigger btn */}
                        <button
                            className='mnav__class-btn bg-primary w-8 h-8 relative -left-full top-8
                            flex justify-center items-center rounded-tl-lg rounded-bl-lg
                            transition-all'
                            onClick={handleMenuClick}
                        >
                            <ChevronLeftIcon className={`close-btn-icon text-2xl text-white w-5 h-5 ${isActive ? 'rotate-180' : 'null'} transition duration-500`} />
                        </button>

                        {/* Logo, List */}
                        <div className='px-12 flex flex-col gap-y-12 h-full'>
                            {/* Logo */}
                            <div>ALBORZ LOGO</div>
                            {/* List */}
                            <ul className='flex flex-col gap-y-5 h-full'>
                                {sectionLink.map(({ id, name, link }) => (
                                    <li key={id}>
                                        <a
                                            href={`/#${link}`}
                                            className='hover:text-accent text-black transition-all duration-300 z-50'
                                            onClick={(e) => handleScroll(e, link)}
                                        >
                                            {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>


                        </div>
                    </nav>
                    {/* Descktop nav */}
                    <nav className='bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]'>
                        {/* List */}
                        <ul className='flex gap-x-5 h-full items-center'>
                            {sectionLink.map(({ id, name, link }) => (
                                <li key={id}>
                                    <a
                                        href={`/#${link}`}
                                        className='text-secondary hover:text-accent transition-all duration-300'
                                        onClick={(e) => handleScroll(e, link)}
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <p className='text-accent'>مجتمع فنی مهندسی البرز</p>
                        </div>
                    </nav>
                </div>
            </div>

        </header>
    )
}

export default Header