import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Header() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src='images/carousel/carousel-1.jpg' alt='banner1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='images/carousel/carousel-2.jpg' alt='banner2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='images/carousel/carousel-3.jpg' alt='banner3' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='images/carousel/carousel-4.jpg' alt='banner3' />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
