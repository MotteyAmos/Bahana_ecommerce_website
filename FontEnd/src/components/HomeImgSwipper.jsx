// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
//import { Pagination } from 'swiper/modules';

// Import Swiper styles
//import 'swiper/swiper.min.css';
//import 'swiper/modules/pagination/pagination.min.css';
//import 'swiper/css/effect-coverflow'

import '../styles/swipperStyle.css';

import 'swiper/css';


const IMG = (src)=>{
    return (
    <img src={src} alt="" className="w-[20rem] h-[20rem] absolute -bottom-[10rem] left-[15rem] border-2 hover:scale-110 transitionTheme hover:rotate-[-10deg] hover:z-10 drop-shadow-2xl"/>
    )

}

export default function HomeImgSwipper() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>ffgfgf</SwiperSlide>
        <SwiperSlide>dfgnm</SwiperSlide>
        <SwiperSlide>dfdf</SwiperSlide>
        <SwiperSlide>dfd</SwiperSlide>
        <SwiperSlide>dfgrgr</SwiperSlide>
      </Swiper>
    </>
  );
}