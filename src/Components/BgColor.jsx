import React, { useState } from "react";

export default function BgColor() {
  const [bgColor, setBgColor] = useState("Orange");
  return (
    <div
      className=" flex gap-3 items-end justify-center w-full h-lvh  pb-7"
      style={{ backgroundColor: bgColor }}
    >
      <button
        className="px-3 py-2 bg-[#CD5C5C] text-white rounded-md"
        onClick={() => setBgColor("#CD5C5C")}
      >
        IndianRed
      </button>
      <button
        className="px-3 py-2 bg-[#F08080] text-white rounded-md "
        onClick={() => setBgColor("#F08080")}
      >
        LightCoral
      </button>
      <button
        className="px-3 py-2 bg-[#FA8072] text-white rounded-md "
        onClick={() => setBgColor("#FA8072")}
      >
        Salmon
      </button>
      <button
        className="px-3 py-2 bg-[#E9967A] text-white rounded-md "
        onClick={() => setBgColor("#E9967A")}
      >
        DarkSalmon
      </button>
      <button
        className="px-3 py-2 bg-[#FFA07A] text-white rounded-md "
        onClick={() => setBgColor("#FFA07A")}
      >
        LightSalmon
      </button>
      <button
        className="px-3 py-2 bg-[#DC143C] text-white rounded-md "
        onClick={() => setBgColor("#DC143C")}
      >
        Crimson
      </button>
      <button
        className="px-3 py-2 bg-[#FF0000] text-white rounded-md "
        onClick={() => setBgColor("#FF0000")}
      >
        Red
      </button>
      <button
        className="px-3 py-2 bg-[#B22222] text-white rounded-md "
        onClick={() => setBgColor("#B22222")}
      >
        FireBrick
      </button>
      <button
        className="px-3 py-2 bg-[#8B0000] text-white rounded-md "
        onClick={() => setBgColor("#8B0000")}
      >
        DarkRed
      </button>
      <button
        className="px-3 py-2 bg-[#FF1493] text-white rounded-md "
        onClick={() => setBgColor("#FF1493")}
      >
        DeepPink
      </button>
    </div>
  );
}
