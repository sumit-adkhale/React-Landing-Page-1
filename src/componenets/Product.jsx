import React, { useState } from "react";
import Button from "./Button";
function Product({ pData }) {
  const [opct, setOpct] = useState(false);

  return (
    <>
      <div
        className={`flex flex-grow justify-between w-full items-center px-32 py-10 hover:bg-gradient-to-r from-[#1a145d] to-[#3225c5] relative `}
        onMouseEnter={() => {
          setOpct(true);
        }}
        onMouseLeave={() => {
          setOpct(false);
        }}
      >
        <h1 className="text-5xl">{pData.name}</h1>
        <div className="w-[30%]">
          <p className="mb-3 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            neque dolorum minima quam suscipit possimus amet accusamus
            cupiditate corporis unde?Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.
          </p>
          <div className="flex gap-4">
            {pData.live && <Button title="Live Website" />}
            {pData.cast && <Button title="Case Study" />}
          </div>
        </div>
        <div
          className={`bg-slate-600 w-1/3 h-[50vh] border-2 top-[-1] left-[25%] absolute ${
            opct ? "opacity-100" : "opacity-0"
          } transition-opacity duration-400 ease-in-out`}
        >
          <img className="w-full h-full" src={pData.img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Product;
