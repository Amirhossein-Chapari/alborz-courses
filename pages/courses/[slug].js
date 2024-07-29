import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import Features from "@/app/sections/Features";
import MainForm from "@/app/sections/MainForm";
import Professors from "@/app/sections/Professors";
import Events from "@/app/sections/Events";
import Newsletter from "@/app/sections/Newsletter";
import Footer from "@/app/sections/Footer";
import Custom404 from "../404";

export default function CoursePage({ course, notFound }) {
    if (notFound) {
        return <Custom404 />;
    }

    return (
        <div dir="rtl">
            <Header />
            <Hero prop={course} />
            <Features prop={course} />
            <MainForm courseId={course.id} />
            <Professors prop={course} />
            {/* <Events prop={course} /> */}
            <Newsletter />
            <Footer />
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const { slug } = params;
    const res = await fetch(`https://alborz-institute.com/prereg/api/courses/${slug}/`);

    if (!res.ok) {
        return {
            props: { notFound: true },
        };
    }

    const course = await res.json();

    if (!course) {
        return {
            props: { notFound: true },
        };
    }

    return {
        props: { course },
    };
}
