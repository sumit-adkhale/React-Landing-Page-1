import React from "react";
import Marquee from "./Marquee";
function Marquees() {
  return (
    <div className="w-full mt-40 overflow-x-hidden">
      <Marquee direction={0}/>
      <Marquee direction={1} />
    </div>
  );
}

export default Marquees;
