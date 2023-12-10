import { useTradingCompStatus, useTradingCompTime } from "@/hooks/useTradingComp";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
  name: string,
  address: string
};

function Card({ name, address }: Props) {
  const data = useTradingCompTime(address);
  console.log(address)
  const status = useTradingCompStatus(address);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (data.startTime.data) {
      setStartTime(convertUnixTimestampToDate(data.startTime.data));
      setEndTime(convertUnixTimestampToDate(data.endTime.data))
    }

  }, [data])



  const convertUnixTimestampToDate = (timestamp: any) => {
    // Multiply by 1000 to convert seconds to milliseconds

    // Create a new Date object
    const date = new Date(Number(timestamp) * 1000);

    // Days of the week array
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Extract day of the week, hours, minutes, and seconds
    const month = months[date.getMonth()];
    const dateDay = date.getDate()

    // Format the components into a human-readable string
    const formattedDayAndTime = `${dateDay} ${month}`;

    return formattedDayAndTime;


  };


  return (
    <div className="w-full  p-5 bg-gray-900 rounded-lg space-y-3">
      <img
        src="https://www.shutterstock.com/image-vector/3d-online-trading-browser-on-260nw-2164079519.jpg"
        alt=""
        className="rounded-lg"
      />

      <div className="flex justify-between items-center">
        <p className=" text-lg">{name}</p>
        <p
          className={`text-sm ${
            status.data == 2 ? "bg-red-500/50" : "bg-green-500/50"
          } p-1 px-2 rounded-lg`}
        >
          {status.data == 0
            ? "Registration"
            : status.data == 1
            ? "Ongoing"
            : "Finished"}
        </p>
      </div>
      <div className="flex justify-between items-center text-opacity-50">
        <div className="bg-gray-800/50 p-1 px-4 rounded-lg">
          <p>Start At</p>
          <p>{startTime}</p>
        </div>
        <div className="bg-gray-800/50 p-1 px-4 rounded-lg">
          <p>End At</p>
          <p>{endTime}</p>
        </div>
      </div>
      <div
        
      >
        {" "}
        <button   className={`btn w-full ${
          status.data == 0
            ? "bg-green-700"
            : status.data == 1
            ? "bg-blue-700"
            : "bg-gray-700"
        }`} disabled={status.data == 2}>
          <Link href={'/trade'}>
          {status.data == 0 ? "Register" : status.data == 1 ? "Trade" : "Ended"}
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
