import { TypedReactHooksDemo } from ".";
import { clothe_28 } from "../../public/images/clothes"
import "../styles/HomeMain.css";

const HomeMain = () => {

  return (
    <div>
      <div className="w-full h-[40vh] bg-[#fbdf99] styleText drop-shadow-md relative">
        <div className="container  relative h-[40vh] m-auto px-[5rem]">
            <img src={clothe_28} alt="" className="w-[20rem] h-[20rem] absolute -bottom-[10rem] left-[15rem] border-2 hover:scale-110 transitionTheme hover:rotate-[-10deg] hover:z-10 drop-shadow-2xl"/>
            <span className="text-white text-7xl drop-shadow-lg absolute right-10 top-[50%] bottom-[50%]">AFRICAN  <TypedReactHooksDemo heroSubTitle={"PRINT"}/> </span>
        </div>

      </div>

    </div>
  )
}

export default HomeMain