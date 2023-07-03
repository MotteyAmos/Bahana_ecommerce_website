
import { HomeMain, TopSales, Features, PopularSales, Footer} from "../components"
import { popularsales, handBag, topratesales,cuff_link,  homeShowCase} from "../../data/data"
import VideoClip from "../components/videoClip"

const HomePage = () => {

  return (
    <div className=" grid gap-[10rem]">   
      <HomeMain/>
      <TopSales value={popularsales}/>
       <Features value={handBag} isHandBag/>
       <TopSales value={topratesales} isTopSale/>
       <Features value={cuff_link} />
      
    </div>
  )
}

export default HomePage 