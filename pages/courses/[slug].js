import Header from "@/app/sections/Header";
import Hero from "@/app/sections/Hero";
import Features from "@/app/sections/Features";
import MainForm from "@/app/sections/MainForm";
import Professors from "@/app/sections/Professors";
// import Events from "@/app/sections/Events";
import Newsletter from "@/app/sections/Newsletter";
import Footer from "@/app/sections/Footer";
import CoursesCard from "../CoursesCard";
import Custom404 from "../404";
import Roadmap from "@/app/sections/Roadmap";

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
            {/* <Roadmap /> */}
            <Professors prop={course} />
            {/* <CoursesCard /> */}
            {/* <Events prop={course} /> */}
            <Newsletter />
            <Footer />
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const { slug } = params;
    let course = null;
    let notFound = false;

    try {
        const res = await fetch(`https://alborz.tech/v1/api/courses/${slug}/`);
        if (!res.ok) {
            notFound =  true;
        } else {
            course = await res.json();
        }
    } catch (error) {
        // console.error('Error fetching the course:', error);
        notFound = true;
    }

    return {
        props: { course, notFound },
    };
}


