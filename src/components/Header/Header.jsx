import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";
import Burger from "../../Assets/Img/burger.svg";


const Header = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className=" fixed top-0 w-full  bg-slate-800  ">
      <div className="flex  justify-between items-center container mx-auto px-4">
        <div className="flex items-center ">
          <NavLink to="/">
            <img
              className="object-cover align-middle"
              src='	https://www.itv.uz/application/images/itv_logo.png'
              alt="logo"
              width={60}
            />
          </NavLink>
          <ul className="hidden md:flex gap-8 p-6 uppercase">
            <li>
              <NavLink to="/films" className="text-white pb-1">
                Films
              </NavLink>
            </li>
            <li>
              <NavLink to="/serials" className="text-white pb-1">
                Serials
              </NavLink>
            </li>
            <li>
              <NavLink to="/cartoons" className="text-white pb-1">
                Cartoons
              </NavLink>
            </li>
            <li>
              <NavLink to="/anime" className="text-white pb-1">
                Anime
              </NavLink>
            </li>
          </ul>
        </div>

        <nav>
          <div>
            <img
              className="absolute top-2 right-6 md:hidden "
              src={Burger}
              alt="burger"
              width={30}
              onClick={showMenu}
            />
            <div className="hidden md:flex">
              
              <button className="border-2 py-1 px-8  text-white border-lime-600 rounded-md hover:bg-lime-600 active:bg-lime-400 active:border-lime-400">
                Enter
              </button>
            </div>
          </div>

          <MenuItem showMenu={showMenu} active={active} />
        </nav>
      </div>
    </div>
  );
};
export default Header;
