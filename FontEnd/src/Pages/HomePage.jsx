
import { HomeMain, TopSales, Features, PopularSales} from "../components"
import { popularsales, handBag, topratesales} from "../../data/data"

const HomePage = () => {

  return (
    <div className=" grid gap-[10rem]">   
        <HomeMain/>
        <TopSales value={popularsales}/>
       <Features value={handBag} isHandBag/>
       <TopSales value={topratesales} />
    </div>
  )
}

export default HomePage 