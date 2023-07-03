import { Link } from "react-router-dom";
import { logo } from "../../public/images";
import VideoClip from "./videoClip";

const Footer = () => {
  return (
    <div>
      <VideoClip />
         <div className=" bg-slate-950 text-slate-100 textFont ">
      <div className="container px-[15rem] py-5">
        <div className="flex  justify-between mb-10">
          <div className="">
            <p className="text-[#dc2626] font-bold text-4xl textFont tracking-wide">BART-HANNAH</p>
            <p className="tracking-[0.1rem] font-thin text-2xl">Enterprice</p>
            <img src={logo} alt="logo-footer" className="h-[9rem]" />
          </div>

          <div className="flex gap-[10rem]">
            <span>About Us</span>
            <span>Private Policy</span>
            <span> Quick Links</span>
          </div>
        </div>

        <div className="flex justify-end gap-[15rem]">
          <div>
            <p>barthannah001@gmail.com</p>
            <span>icon</span>
          </div>
          <div>
            <p>barthannah.gh</p>
            <Link>icon</Link>
            <Link>icon</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Footer;
