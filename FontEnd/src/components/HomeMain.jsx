import { TypedReactHooksDemo } from ".";
import { clothe_28 } from "../../public/images/clothes"
import "../styles/HomeMain.css";
import HomeImgSwipper from "./HomeImgSwipper";

const HomeMain = () => {

  return (
    <div>
      <div className="w-full h-[70vh]  bg-[#fbdf99] styleText drop-shadow-md relative">
        <div className="container grid gap-3 max-md:grid-cols-1 border-4  grid-cols-12 relative h-[70vh] m-auto px-[5rem] pt-[10rem]">
          <div className="col-span-6 md:col-span-4  relative hover:scale-110 transitionTheme hover:rotate-[-10deg]">
          <HomeImgSwipper/>
          </div>
          <div className="col-span-6 md:col-span-8 grid items-center justify-center text-center">
            <div className="text-white text-6xl drop-shadow-lg  w-full">HOME OF AFRICAN  <TypedReactHooksDemo heroSubTitle={["FABRIC", "BAG", "CUFF LINK"]}/> </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default HomeMain