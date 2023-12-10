import React from "react";
import { useQuery, gql } from "@apollo/client";
import { getLeaderBoard } from "@/utils/apollo/queries";
import { formatAddress } from "@/utils";

type Props = {
  avatar: string;
  address: string;
  volume0: string;
  volume1: string;
  txCount: number;
  symbol0: string;
  symbol1: string;
};
const renderLeaderBanner = () => {
  return <></>;
};
const Leader = (props: Props) => {
  const { loading, error, data } = useQuery(getLeaderBoard);
  console.log("apollo", data);

  return (
    <div>
      {" "}
      <li className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 font-semibold text-white leading-none dark:bg-white dark:text-gray-800">
              {props.avatar}
            </span>
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {formatAddress(props.address)}
            </p>
          
          </div>

          <div className="flex gap-5">
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {props?.txCount} Txns
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {props?.volume0} {props?.symbol0}
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {props?.volume1} {props?.symbol1}
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Leader;
