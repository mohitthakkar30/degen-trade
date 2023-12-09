import React from "react";

type Props = {};

function Card({}: Props) {
  return (
    <div className="w-full  p-5 bg-gray-900 rounded-lg space-y-3">
      <img
        src="https://www.shutterstock.com/image-vector/3d-online-trading-browser-on-260nw-2164079519.jpg"
        alt=""
        className="rounded-lg"
      />

      {/* <img
        src="https://cdn.sushi.com/image/upload/f_auto,c_limit,w_48,q_auto/tokens/1/0xdAC17F958D2ee523a2206206994597C13D831ec7.jpg"
        alt=""
        className="rounded-full"
      /> */}
      <div className="flex justify-between items-center">
        <p className=" text-lg">USDT Competition</p>
        <p className=" text-sm bg-green-500/50 p-1 px-2 rounded-lg">Ongoing</p>
      </div>
      <div className="flex justify-between items-center text-opacity-50">
        <div className="bg-gray-800/50 p-1 px-4 rounded-lg">
          <p>Start At</p>
          <p>Sat 9 Dec</p>
        </div>
        <div className="bg-gray-800/50 p-1 px-4 rounded-lg">
          <p>End At</p>
          <p>Sat 9 Dec</p>
        </div>
      </div>
      <div className="btn w-full btn-secondary">Trade Now</div>
    </div>
  );
}

export default Card;
