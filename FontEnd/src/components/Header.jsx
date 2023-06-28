import { logo } from "../../public/images";
import { Route, Router, NavLink } from "react-router-dom";

import "../styles/navStyle.css";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";

const Header = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [navbg, setNavbg] = useState(false);

  const checkScrollHight = () => {
    if (scrollY > 40) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return checkScrollHight();
    });
    return () => {
      checkScrollHight();
    };
  }, []);
  return (
    <div className={`fixed top-0 left-0 z-20  drop-shadow-lg border-none font-medium w-full flex justify-between items-center text-lg px-10 
    ${navbg && "backdrop-blur-xl  bg-white/50  border-b-4"}`}>
      <div className="logo">
        <img src={logo} alt="logo_img" className="w-20" />
      </div>
      <nav className="flex w-[40%] justify-between items-center">
        <NavLink to="/">Home</NavLink>
        <span className="cursor-pointer z-20 relative products ">
          Products
          <ul className=" hidden absolute  gap-5 mt-1   py-1 px-5 border-none drop-shadow-xl">
            <li>
              <NavLink to="/all_fabrics">Fabrics</NavLink>
            </li>
            <li>
              <NavLink to="/bags">bags</NavLink>
            </li>
            <li>
              <NavLink to="/cuff_link">cuff_Link</NavLink>
            </li>
          </ul>
        </span>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/footer">Contact us</NavLink>
      </nav>
      <div
        className={` searchBar  relative  rounded-full drop-shadow-md max-w-sm w-[40em] ${
          !searchBar && ""
        }`}
      >
        <div className={`w-full absolute searchBar h-full right-0 flex items-center ${!searchBar && "w-[10%] "}`}>
          <input
            type="text"
            placeholder="search item....."
            className={`outline-none searchBar px-2 absolute right-4 transitionTheme border-none w-[90%] h-10 rounded-l-lg   ${
              !searchBar && " w-[0%] absolute right-0 h-0 rounded-sm  "
            }`}
          />
          <button
            className={` p-1 absolute  bg-[#dc2626] searchBar rounded-r-full  w-10 h-10 grid justify-center items-center  right-0  ${
              !searchBar &&
              "rounded-r-full rounded-l-full grid justify-center items-center  "
            }`}
            onClick={() => setSearchBar(!searchBar)}
          >
            <CiSearch
              className="hover:scale-[95%] searchBar"
              size="1.8rem"
              color="#ffff"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
