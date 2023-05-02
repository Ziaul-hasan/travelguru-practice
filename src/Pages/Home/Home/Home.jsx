import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import './Home.css'

const Home = () => {
    const [travelPlace, setTravelPlace] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/destination')
            .then(res => res.json())
            .then(data => setTravelPlace(data));
    }, [])
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const activeTravelPlace = travelPlace[activeSlideIndex]
    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.realIndex)
    }
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            <div>
                <h2>{activeTravelPlace?.name}</h2>
                <p>{activeTravelPlace?.description}</p>
            </div>
            <div>
                <Swiper
                    effect={''}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                          }
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                    onSlideChange={handleSlideChange}
                >
                    {
                        travelPlace.map(place => <SwiperSlide key={place.id} >
                            {
                                ({ isActive }) => (
                                    <div className={`relative ${isActive && 'border-4 border-yellow-500'} border-2 border-blue-500 rounded-xl w-[200px] h-[300px] md:h-[500px] md:w-[300px] bg-cover bg-center`}>
                                        <img className='w-full h-full object-cover rounded-xl' src={place.image} alt="" />
                                        <h2>{place.name}</h2>
                                    </div>
                                )
                            }
                        </SwiperSlide>)
                    }
                    <div className="slider-controler">
                        <div className='slide-arrow'>
                            <div className="swiper-button-prev">
                                <HiChevronLeft></HiChevronLeft>
                            </div>
                            <div className="swiper-button-next">
                                <HiChevronRight></HiChevronRight>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>

            </div>
        </div>
    );
};

export default Home;