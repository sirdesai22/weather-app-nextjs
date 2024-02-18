import React from "react";
import { MdLocationPin, MdSunny } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import SearchBox from "./SearchBox";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-gray-300">
      <div className="flex items-center justify-center w-full h-[80px] max-w-7xl px-3 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-gray-700 text-4xl font-semibold">Weather</h2>
          <MdSunny className="text-4xl text-amber-500 mt-1" />
        </div>
        {/* <div className="flex justify-center items-center">
          <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdLocationPin className="text-3xl" />
          <p className="text-slate-900/80 text-sm">India</p>
          <input type="text" name="" id="" className=" w-[80%] p-2"/>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
