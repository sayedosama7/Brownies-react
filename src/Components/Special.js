/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Special() {
    return (
        <>
            <h2 className="title-center">منتجات مميزة</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper mb-5"
            >
                <SwiperSlide className='special'>
                    <img src="images/special/special-1.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-2.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-3.png" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-4.png" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-5.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-6.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-7.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-8.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-1.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-2.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-3.png" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-4.png" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-5.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-6.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-7.jpg" />
                </SwiperSlide>
                <SwiperSlide className='special'>
                    <img src="images/special/special-8.jpg" />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
