import { logo } from "../../public/images";
import { Route, Router, NavLink } from "react-router-dom";

import "../styles/navStyle.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [searchBar, setSearchBar] = useState(false);
  console.log(searchBar);
  return (
    <div className="bg-orange-100  drop-shadow-lg border-none font-medium w-full flex justify-between items-center text-lg px-10 ">
      <div className="logo">
        <img src={logo} alt="logo_img" className="w-20" />
      </div>
      <nav className="flex w-[40%] justify-between items-center">
        <NavLink to="/">Home</NavLink>
        <span className="cursor-pointer relative products ">
          Products
          <ul className="hidden  absolute gap-5 mt-1  bg-orange-100 py-3 px-5 border-none drop-shadow-xl">
            <li>
              <NavLink to="/fabrics">Fabrics</NavLink>
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
              !searchBar && " w-0 absolute right-0 h-0 rounded-sm  "
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
