import React, { useState } from 'react';
import { useFormik } from 'formik';
import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2';


function MainForm({ courseId }) {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            course: courseId,
        },
        onSubmit: async (values) => {
            try {
                const response = await fetch('https://alborz-institute.com/prereg/api/prereg/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                await response.json();
                Swal.fire({
                    title: "اطلاعات با موفقیت ثبت شد",
                    icon: "success",
                    timer: 1500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    iconColor: "#1cbccf",
                    color: "#808080",
                });
            } catch (error) {
                Swal.fire({
                    title: "خطایی رخ داده است!",
                    text: "لطفاً مدتی بعد امتحان کنید.",
                    icon: "warning",
                    timer: 1500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    color: "#808080",
                });
            }
        },
    });


    return (
        <section className='container'>
            <div className='container mt-10 xl:mt-20 py-5 lg:py-10 shadow-custom1 rounded-[20px] border border-secondary/10 text-accent'>
                <h2 className='mb-5 lg:mb-[50px] text-center font-MorabbaMedium text-accent text-[23px] lg:text-3xl xl:text-5xl'>
                    برای مشاوره رایگان فرم زیر را پر کنید .
                </h2>
                <div>
                    <form onSubmit={formik.handleSubmit} className='grid grid-cols-4 gap-5'>
                        {/* Name input*/}
                        <div className='col-span-4 sm:col-span-2 xl:col-span-1'>
                            <div className="relative border rounded-lg">
                                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                    <div className='w-4 h-4 text-gray-500 dark:text-gray-400'>
                                        <UserIcon />
                                    </div>
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    className=" text-sm rounded-lg w-full p-2.5 text-secondary font-DanaMedium"
                                    placeholder="نام و نام خانوادگی"
                                />
                            </div>
                        </div>
                        {/* Number input*/}
                        <div className='col-span-4 sm:col-span-2 xl:col-span-1'>
                            <div className="relative border rounded-lg">
                                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                    <div className='w-4 h-4 text-gray-500 dark:text-gray-400'>
                                        <PhoneIcon />
                                    </div>
                                </div>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="number"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    className="no-spinner text-sm rounded-lg w-full p-2.5 text-secondary font-DanaMedium"
                                    placeholder="شماره همراه"
                                />
                            </div>
                        </div>
                        {/* Email input */}
                        <div className='col-span-4 sm:col-span-2 xl:col-span-1'>
                            <div className="relative border rounded-lg">
                                <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                                    <div className='w-4 h-4 text-gray-500 dark:text-gray-400 z-10'>
                                        <EnvelopeIcon />
                                    </div>
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className=" text-sm rounded-lg w-full p-2.5 text-secondary font-DanaMedium z-50"
                                    placeholder="ایمیل"
                                />
                            </div>
                        </div>
                        <div className='col-span-4 sm:col-span-2 xl:col-span-1'>
                            <button
                                type="submit"
                                className="w-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm p-2.5 text-center me-2 mb-2 delay-700 transition font-DanaMedium"
                            >
                                ثبت
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default MainForm;
