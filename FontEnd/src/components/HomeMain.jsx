import { TypedReactHooksDemo } from ".";
import { clothe_28 } from "../../public/images/clothes"
import "../styles/HomeMain.css";
import HomeImgSwipper from "./HomeImgSwipper";

const HomeMain = () => {

  return (
    <div>
      <div className="w-full h-[40vh] bg-[#fbdf99] styleText drop-shadow-md relative">
        <div className="container  relative h-[40vh] m-auto px-[5rem]">
          <HomeImgSwipper/>
            <span className="text-white text-7xl drop-shadow-lg absolute right-10 top-[50%] bottom-[50%]">HOME OF AFRICAN  <TypedReactHooksDemo heroSubTitle={["FABRIC", "BAG", "CUFF LINK"]}/> </span>
        </div>

      </div>

    </div>
  )
}

export default HomeMain