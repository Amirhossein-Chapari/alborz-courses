// pages/404.js
import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div id="notfound" className="relative h-screen bg-white flex items-center justify-center">
            <div className="notfound text-center p-4">
                <div className="notfound-404">
                    <h1 className="text-[100px] font-light text-transparent bg-clip-text bg-accent font-MorabbaBold">
                        ۴۰۴
                    </h1>
                </div>
                <h2 className="text-[33px] mt-0 mb-6 font-MorabbaMedium text-secondary ">
                    !   صفحه مورد نظر پیدا نشد
                </h2>
                <p className="text-[16px] font-light mt-0 mb-6 font-DanaMedium text-secondary">
                    .ظاهراً آدرس وارد شده اشتباه است
                    {/* <Link href="/">
                        <a className="text-[#ff6f68] border-b border-dashed border-[#ff6f68]">Return to homepage</a>
                    </Link> */}
                </p>
                {/* <div className="notfound-social flex justify-center space-x-2">
                    <a href="#" className="w-10 h-10 flex items-center justify-center text-[#ff6f68] border border-[#efefef] rounded-full transition duration-200 hover:bg-[#ff6f68] hover:text-white">
                        <i className="fa fa-facebook text-sm"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center text-[#ff6f68] border border-[#efefef] rounded-full transition duration-200 hover:bg-[#ff6f68] hover:text-white">
                        <i className="fa fa-twitter text-sm"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center text-[#ff6f68] border border-[#efefef] rounded-full transition duration-200 hover:bg-[#ff6f68] hover:text-white">
                        <i className="fa fa-pinterest text-sm"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center text-[#ff6f68] border border-[#efefef] rounded-full transition duration-200 hover:bg-[#ff6f68] hover:text-white">
                        <i className="fa fa-google-plus text-sm"></i>
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default Custom404;
