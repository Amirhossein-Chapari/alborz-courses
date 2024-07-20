// pages/courses/[slug].js

import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import Features from "@/app/sections/Features";
import MainForm from "@/app/sections/MainForm";
import Professors from "@/app/sections/Professors";
import Events from "@/app/sections/Events";
import Newsletter from "@/app/sections/Newsletter";
import Footer from "@/app/sections/Footer";


export default function CoursePage({ course, slug }) {
    if (!course) {
        return <div>Loading...</div>;
    }


    return (
        <div dir="rtl">
            <Header />
            <Hero prop={course} />
            <Features prop={course} />
            <MainForm />
            <Professors prop={course} />
            <Events prop={course} />
            <Newsletter />
            <Footer />
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const { slug } = params;
    const res = await fetch(`https://alborz-institute.com/prereg/api/courses/${slug}`);
    const course = await res.json();

    if (!course) {
        return {
            notFound: true,
        };
    }

    return {
        props: { course, slug },
    };
}
