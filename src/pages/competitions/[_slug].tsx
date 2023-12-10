import Header from "@/components/Header/Header";
import Leader from "@/components/Leader/Leader";
import { useTradingCompTime } from "@/hooks/useTradingComp";
import { GET_COMPETITION_LEADERBOARD } from "@/utils/apollo/queries";
import Image from "next/image";
import React from "react";
import { useQuery } from "@apollo/client";
import Countdown from "react-countdown";
import { useRouter } from "next/router";
type Props = {};

const trade = (props: Props) => {
  const router = useRouter();
  const { _slug = null } = router.query;

  const { error: compErr, data: compData } = useQuery(
    GET_COMPETITION_LEADERBOARD,
    {
      variables: {
        id: _slug,
      },
    }
  );
  console.log(`🚀 ~ data:`, compData);
  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return null;
    } else {
      // Render a countdown
      return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": hours }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": minutes }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": seconds }}>{}</span>
            </span>
            sec
          </div>
        </div>
      );
    }
  };
  console.log(`🚀 ~ compData:`, compData);
  return (
    <>
      <Header />
      {/* trading comp info */}
      <div className="flex justify-around items-center bg-white border border-gray-200  shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full border-none p-12">
        {/* comp details */}
        <div className="flex w-2/4 justify-center ">
          <div className="flex flex-col">
            <span className="text-4xl font-extrabold capitalize">
              {compData?.tradingCompetiton.name}
            </span>
            <span>
              Compitition Expiry -
              {compData?.tradingCompetiton?.endTime && (
                <Countdown
                  renderer={renderer}
                  date={
                    new Date(
                      Number(compData?.tradingCompetiton?.endTime) * 1000
                    )
                  }
                />
              )}{" "}
            </span>
          </div>
        </div>
        {/* comp banner */}
        <img
          className="object-cover flex-1 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://biswap.org/_next/image?url=https%3A%2F%2Fstatic.biswap.org%2Fhttps%3A%2F%2Fstatic.biswap.org%2Fcompetitions%2F1684840122324B-DayCompHeader.png&w=1200&q=75"
          height={507}
          width={207}
          alt=""
        />
      </div>
      {/* trading leader board */}
      <div className="w-full bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {compData?.userParticipatedTradingCompetitons?.map((user) => {
              return (
                <Leader
                  address={user?.participant}
                  avatar={user?.participant[0]}
                  txCount={user?.totalTxns}
                  volume0={Number(user?.totalVolumeInToken0).toFixed(4)}
                  volume1={Number(user?.totalVolumeInToken1).toFixed(4)}
                  symbol0={compData?.tradingCompetiton?.token0?.symbol}
                  symbol1={compData?.tradingCompetiton?.token1?.symbol}
                  key={user?.id}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default trade;
