import {
  HomeMain,
  TopSales,
  Features,
  PopularSales,
  Footer,
} from "../components";
import {
  popularsales,
  handBag,
  topratesales,
  cuff_link,
  homeShowCase,
} from "../../data/data";
import {VideoClip} from "../components"
import {allfabricVideo, allCuffLinkVideo} from "../../public/images";
import video from "../../public/images/video/homeFashionShowCase.mp4";

const HomePage = () => {
  return (
    <>
      <div className=" grid gap-[10rem] mb-10">
        <HomeMain />
        <TopSales value={popularsales} />
        <Features value={handBag} isHandBag />
        <TopSales value={topratesales} isTopSale />
        <Features value={cuff_link} />
        <video src="public\images\video\cuffLink.mp4"></video>
      </div>
      <VideoClip video={video}/>
    </>
  );
};

export default HomePage;
