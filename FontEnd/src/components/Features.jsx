import { Link } from "react-router-dom";

const Features = ({isHandBag, value: { heading, title, text, btn, url, img } }) => {
    return (
      <div className={` flex container border-2 px-[15rem] m-auto  justify-between max-md:flex-col ${isHandBag && "flex-row-reverse "}`}>
        <div className={`border-2 w-[45%] max-md:w-[20rem]  grid gap-4 `}>
          <div>
            <h3 className="font-bold text-4xl max-md:text-2xl  text-sky-500">{heading}</h3>
            <h1 className="font-bold text-5xl max-md:text-3xl text-slate-950">{title}</h1>
          </div>
  
          <div>
            <p className="text-slate-800"> {text}</p>
          </div>
          <div className="bg-slate-900 h-[2rem] w-[8rem] grid items-center justify-center text-white
          rounded-sm active:scale-90 transition-all duration-500 ease-in-out  ">
            <Link to={url}>
                {btn}
            </Link>
          </div>
        </div>
          <div className="relative grid items-center w-[25rem] max-md:w-full max-md:justify-center">
              <img src={img} alt={`img/${heading}`}  
              className={` h-[20rem] absolute   max-md:top-0 max-md:relative right-[10rem] max-md:right-[4rem] md:right-0 max-md:scale-50   hover:scale-110 transition-theme
              ${isHandBag && "left-[10rem] max-md:left-0  md:left-0  hover:scale-110 max-md:relative "}`}/>
  
          </div>
      </div>
    );
  };
  
  export default Features;
  