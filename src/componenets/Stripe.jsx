import React from "react";

function Stripe({val}) {
  return (
    <div className="border-y-2 border-r-2 border-zinc-800 w-[16.6%] h-16 px-5 py-2 flex items-center justify-between">
      <img
        className="w-1/2 h-3/4"
        src={val.url}
        alt=""
      />
      <h2 className="text-xl font-semibold">{val.num}</h2>
    </div>
  );
}

export default Stripe;
