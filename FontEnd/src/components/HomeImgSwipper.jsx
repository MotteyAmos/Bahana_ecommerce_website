// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { homeMainSwipperImg } from '../../data/data';


import {Navigation, Pagination, Scrollbar, A11y, EffectFade} from  'swiper';
//import 'swiper/css'
import 'swiper/swiper-bundle.min.css';

//import "../styles/swipperStyle.css";
//import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import required modules
//import { Pagination } from 'swiper/modules';

// Import Swiper styles
//import 'swiper/swiper.min.css';
//import 'swiper/modules/pagination/pagination.min.css';
//import 'swiper/css/effect-coverflow'

//import '../styles/swipperStyle.css';

//import 'swiper/css';


const IMG = (src)=>{
    return (
    <img src={src} alt="" className="w-[50%] h-[100%]   border-2 hover:scale-110 transitionTheme hover:rotate-[-10deg] hover:z-10 drop-shadow-2xl"/>
    )

}

export default function HomeImgSwipper() {
  return (
    <>
<Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable:true}}
      scrollbar={{draggable:true}}
     effect='fade'
      
    >
      <SwiperSlide className='flex justify-center items-center'>{IMG(homeMainSwipperImg.bag1)}</SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>{IMG(homeMainSwipperImg.cuff_link1)}</SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>{IMG(homeMainSwipperImg.fabric1)}</SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>{IMG(homeMainSwipperImg.bag2)}</SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>{IMG(homeMainSwipperImg.cuff_link2)}</SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>{IMG(homeMainSwipperImg.fabric2)}</SwiperSlide>

    </Swiper>
    </>
  );
}