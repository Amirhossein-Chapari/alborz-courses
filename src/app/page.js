"use client";
import React from "react";
import Head from "next/head";
import "swiper/css";
import "swiper/css/effect-cards"; // برای افکت cards
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules"; // برای افکت cards



export default function Home() {
  return (
    <div dir="rtl">
      <Head>
        <title>مجتمع فنی مهندسی البرز</title>
        <link rel="shortcut icon" href="#" />
      </Head>

      {/* Home Content --> courses slider */}
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]} // افزودن ماژول EffectCards
          className="mySwiper w-[250px] max-w-6xl h-80 p-5"
        >
          {/* دوره ۱ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              دوره‌های امنیت وب (OWASP)
            </h2>
            <p className="course-description text-base text-gray-700">
              یادگیری مفاهیم پیشرفته امنیت وب و روش‌های مقابله با حملات سایبری.
            </p>
            <a
              href="https://alborz-institute.com/courses/owasp-courses"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>

          {/* دوره ۲ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              دوره‌های زبان انگلیسی
            </h2>
            <p className="course-description text-base text-gray-700">
              تقویت مهارت‌های زبان انگلیسی برای اهداف تحصیلی و حرفه‌ای.
            </p>
            <a
              href="https://alborz-institute.com/courses/english-cource"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>

          {/* دوره ۳ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              اتاق معاملات البرز
            </h2>
            <p className="course-description text-base text-gray-700">
              آموزش اصول و استراتژی‌های معاملاتی در بازارهای مالی.
            </p>
            <a
              href="https://alborz-institute.com/courses/alborz-trading-room"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>

          {/* دوره ۴ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              دوره‌های دیتاسنتر (مرحله دوم)
            </h2>
            <p className="course-description text-base text-gray-700">
              آموزش پیشرفته مفاهیم دیتاسنتر و مدیریت زیرساخت‌های شبکه.
            </p>
            <a
              href="https://alborz-institute.com/courses/data-center-second-stage"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>

          {/* دوره ۵ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              دوره‌های دیتاسنتر (مرحله اول)
            </h2>
            <p className="course-description text-base text-gray-700">
              آموزش مقدماتی مفاهیم دیتاسنتر و زیرساخت‌های شبکه.
            </p>
            <a
              href="https://alborz-institute.com/courses/data-center-first-stage"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>

          {/* دوره ۶ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              دوره‌های شبکه (مرحله پنجم)
            </h2>
            <p className="course-description text-base text-gray-700">
              آموزش پیشرفته شبکه‌های کامپیوتری و پروتکل‌های ارتباطی.
            </p>
            <a
              href="https://alborz-institute.com/courses/network-fifth-stage"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>

          {/* دوره ۷ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              دوره‌های شبکه (مرحله چهارم)
            </h2>
            <p className="course-description text-base text-gray-700">
              آموزش مفاهیم پیشرفته شبکه و مدیریت سیستم‌های ارتباطی.
            </p>
            <a
              href="https://alborz-institute.com/courses/network-fourth-stage"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>

          {/* دوره ۸ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              دوره‌های شبکه (مرحله سوم)
            </h2>
            <p className="course-description text-base text-gray-700">
              آموزش مفاهیم متوسط شبکه و راه‌اندازی سیستم‌های ارتباطی.
            </p>
            <a
              href="https://alborz-institute.com/courses/network-third-stage"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>

          {/* دوره ۹ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              دوره‌های شبکه (مرحله دوم)
            </h2>
            <p className="course-description text-base text-gray-700">
              آموزش اصول اولیه شبکه و راه‌اندازی سیستم‌های ساده.
            </p>
            <a
              href="https://alborz-institute.com/courses/network-second-stage"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>

          {/* دوره ۱۰ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              دوره‌های شبکه (مرحله اول)
            </h2>
            <p className="course-description text-base text-gray-700">
              آموزش مقدماتی شبکه‌های کامپیوتری و مفاهیم پایه.
            </p>
            <a
              href="https://alborz-institute.com/courses/network-first-stage"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>

          {/* دوره ۱۱ */}
          <SwiperSlide className="flex flex-col justify-between items-start h-96 p-5 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="course-title text-xl font-bold text-blue-600 mb-2">
              آکادمی کد نویسی
            </h2>
            <p className="course-description text-base text-gray-700">
              آموزش برنامه‌نویسی به زبان‌های مختلف و توسعه نرم‌افزار.
            </p>
            <a
              href="https://alborz-institute.com/courses/code-academy"
              className="text-blue-600"
            >
              مشاهده دوره
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
