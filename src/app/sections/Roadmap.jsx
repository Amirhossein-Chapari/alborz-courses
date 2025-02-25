import React from 'react';
import '../../../styles/Roadmap.scss';
import { Fade } from "react-awesome-reveal"
import { Fa1 } from "react-icons/fa6";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const bottomToTopAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Roadmap = () => {
    const events = [
        {
            date: 'گام اول',
            title: 'مرحله یک',
            description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
            type: 'type1',
            icon: '<Fa1 />'
        },
        {
            date: 'گام دوم',
            title: 'مرحله دو',
            description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
            type: 'type2',
            icon: '<Fa1 />'
        },
        {
            date: 'گام سوم',
            title: 'مرحله سه',
            description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
            type: 'type3',
            icon: '<Fa1 />'
        },
        {
            date: 'گام چهار',
            title: 'مرحله چهار',
            description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
            type: 'type4',
            icon: '<Fa1 />'
        },
        // {
        //     date: '20-08-2019',
        //     title: 'Exercise',
        //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...',
        //     type: 'type3',
        //     icon: 'lni-slim'
        // },
        // {
        //     date: '20-08-2019',
        //     title: 'Birthday',
        //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...',
        //     type: 'type1',
        //     icon: 'lni-cake'
        // },
        // {
        //     date: '20-08-2019',
        //     title: 'Birthday',
        //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...',
        //     type: 'type1',
        //     icon: 'lni-cake'
        // },
        // {
        //     date: '20-08-2019',
        //     title: 'Birthday',
        //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit...',
        //     type: 'type1',
        //     icon: 'lni-cake'
        // },
    ];

    return (
        <div className="container max-w-4xl mx-auto" dir='ltr'>
            {/* <h2 className=''>سرفصل ها</h2> */}
            <h2 className="my-10 font-MorabbaMedium text-center">سرفصل ها</h2>
            <div className="timeline">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`timeline__event animated fadeInUp delay-${3 - index}s timeline__event--${event.type}`}
                    >
                        <div className="timeline__event__icon">
                            <Fade>
                                <div >
                                    <i className='event__icon'><Fa1 /></i>
                                </div>
                            </Fade>
                        </div>

                        {/* 
                        <Reveal keyframes={bottomToTopAnimation} delay={index * 100}>
                            <div className='flex' dir='rtl'> */}
                        <div className="timeline__event__date font-MorabbaMedium">
                            {event.date}
                        </div>
                        <div className="timeline__event__content">
                            <div>
                                <div className="timeline__event__title text-end font-MorabbaMedium">
                                    {event.title}
                                </div>
                                <div className="timeline__event__description text-end font-Dana text-base">
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        </div>
                        {/* </div>
                        </Reveal> */}



                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roadmap;