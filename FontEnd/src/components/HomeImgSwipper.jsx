import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { homeMainSwipperImg } from '../../data/data';

 "../styles/swipperStyle.css";

const IMG = (src)=>{
    return (
    <img src={src} alt="" className="w-full h-full   border-2 hover:scale-110 transitionTheme hover:rotate-[-10deg] hover:z-10 drop-shadow-2xl"/>
    )

}

export default function HomeImgSwipper() {
  return (
    <>
    
    <Carousel autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false} showStatus={false} className='w-[100%] h-[100%] '>
      <div className='w-full rounded-md border-4   drop-shadow-3xl h-[28rem] '>
      {IMG(homeMainSwipperImg.bag1)}
      </div>
      <div className='w-full rounded-md border-4   drop-shadow-3xl h-[28rem]'>
      {IMG(homeMainSwipperImg.cuff_link1)}
      </div>
      <div className='w-full rounded-md border-4   drop-shadow-3xl h-[28rem]'>
      {IMG(homeMainSwipperImg.fabric1)}
      </div>
      <div className='w-full rounded-md border-4   drop-shadow-3xl h-[28rem]'>
      {IMG(homeMainSwipperImg.bag2)}
      </div>
      <div className='w-full rounded-md border-4   drop-shadow-3xl h-[28rem]'>
      {IMG(homeMainSwipperImg.cuff_link2)}
      </div>
      <div className='w-full rounded-md border-4   drop-shadow-3xl h-[28rem]'>
      {IMG(homeMainSwipperImg.fabric2)}
      </div>
    </Carousel>
    </>
  );
}