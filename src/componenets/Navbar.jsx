import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl  sm:px-4 w-full  px-18 flex py-6 sm:py-4 items-center mx-auto  justify-between border-b-2 border-b-gray-700">
      <div className="nav-left flex items-center">
        <img src="src/assets/logo.png" alt="" className="w-48 h-16" />
        <div className="flex items-center gap-16 ml-28 font-semibold text-xl">
          {["Home", "Work", "Culture", "", "News"].map((elem, i) => (
            <a href="#" key={i}>
              {i === 1 ? (
                <span  className="inline-block w-3 h-3 bg-green-400 mr-2 rounded-full"></span>
              ) : null}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <Button/>
    </div>
  );
}

export default Navbar;
