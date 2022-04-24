import React from "react";
import { Link } from "react-router-dom";
import Close from "../../Assets/Img/close.svg";

const MenuItem = ({showMenu, active }) => {
  return (
    <div>
      <ul
        className={
          active
            ? "md:hidden flex-col sticky  inset-0 text-white left-1/3 uppercase bg-slate-800 gap-8 p-6 flex justify-center items-center  "
            : "hidden"
        }
      >
        <img src={Close} alt="" width={20} onClick={showMenu} />
        <li>
          <Link to="/films" className="text-white">
            Films
          </Link>
        </li>
        <li>
          <Link to="/serials" className="text-white">
            Serials
          </Link>
        </li>
        <li>
          <Link to="/cartoons" className="text-white">
            Cartoons
          </Link>
        </li>
        <li>
          <Link to="/anime" className="text-white">
            Anime
          </Link>
        </li>
        <button className="border py-2 px-8  text-white border-lime-600 rounded-md hover:bg-lime-600 active:bg-lime-400 active:border-lime-400">
          Enter
        </button>
      </ul>
    </div>
  );
};
export default MenuItem;
