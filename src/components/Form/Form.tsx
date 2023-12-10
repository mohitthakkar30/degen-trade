import { useState } from "react";
import { useCreateTradingComp } from "../../hooks/useCompFactory";
import compFactory from "../../configs/abi/compFactoryABI.json";
import { useActiveChainId } from "@/hooks/useActiveChainId";
import ethers from "ethers";
import { useWalletClient } from "wagmi";
import { useRegister } from "@/hooks/useTradingComp";
import toast from "react-hot-toast";
import Link from "next/link";

interface IProps {}
function Form({}: IProps) {
  const [title, setTitle] = useState<string>("");
  const [owner, setOwner] = useState<string>("");
  const [tradingPair, setTradingPair] = useState<string>("");
  const [warmUpPeriod, setWarmUpPeriod] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { writeAsync: createCompetion } = useCreateTradingComp();

  const { writeAsync: register } = useRegister(
    "0xb0c7c09f482ff250fe9ea7a16f11b0e343b6fafc"
  );

  // const response = async () =>{
  //     const response = register()
  //     console.log("res - ", response);

  // }

  const response = async () => {
    let loadingToastId
    try {
      setLoading(true);
      loadingToastId = toast.loading("Submitting txn", {
        style: {
          background: "#363636",
          color: "lightgray",
        },
      });
      console.log("In response");
      const warmUpPeriodinUnix = new Date(warmUpPeriod).getTime() / 1000;
      const startTimeinUnix = new Date(startTime).getTime() / 1000;
      const endTimeinUnix = new Date(endTime).getTime() / 1000;
      console.log(warmUpPeriodinUnix, startTimeinUnix, endTimeinUnix);

      const arrayAddress = [tradingPair];

      console.log(
        "[warmUpPeriodinUnix, startTimeinUnix, endTimeinUnix, title, arrayAddress, tradingPair]",
        [
          warmUpPeriodinUnix,
          startTimeinUnix,
          endTimeinUnix,
          title,
          owner,
          arrayAddress,
        ]
      );

      const res = await createCompetion({
        args: [
          warmUpPeriodinUnix,
          startTimeinUnix,
          endTimeinUnix,
          title,
          owner,
          arrayAddress,
        ],
      });
      if(res?.hash){
     
          toast.success(
            <div className="flex flex-col w-44">
              <p>Txn Submitted</p>
              <Link
                href={`/tx/${res?.hash}`}
                target="_blank"
                referrerPolicy="no-referrer"
                className="mt-2 font-normal btn btn-xs btn-outline"
              >
                View on Explorer
              </Link>
            </div>,
            {
              id: loadingToastId,
              duration: 5000,
              style: {
                background: "#363636",
                color: "lightgray",
              },
            }
          );
      }else{
            toast.error(
              <div className="flex flex-col w-44">
                <p>Txn Failed : Something went wrong</p>
                {res?.hash && (
                  <Link
                    href={`/tx/${res?.hash}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="mt-2 font-normal btn btn-xs btn-outline"
                  >
                    View on Explorer
                  </Link>
                )}
              </div>,
              {
                id: loadingToastId,
                duration: 5000,
                style: {
                  background: "#363636",
                  color: "lightgray",
                },
              }
            );
      }
      setLoading(false);
      console.log(res);
    } catch (err) {
      setLoading(false);
           toast.error(
             <div className="flex flex-col w-44">
               <p>Txn Failed : Something went wrong</p>
             </div>,
             {
               id: loadingToastId,
               duration: 5000,
               style: {
                 background: "#363636",
                 color: "lightgray",
               },
             }
           );
      console.log(err);
    }
  };

  return (
    <div className="border-gray-200 dark:bg-gray-900 p-10 rounded-lg w-full ">
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Compition Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Owner
        </label>
        <input
          type="text"
          id="owner"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Owner"
          onChange={(e) => setOwner(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Trading pair
        </label>
        <input
          type="text"
          id="trading_pair"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Trading Pair"
          required
          onChange={(e) => setTradingPair(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Warm up period
        </label>
        <input
          type="datetime-local"
          id="trading_pair"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Trading Pair"
          onChange={(e) => setWarmUpPeriod(e.target.value)}
          required
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Start Time
        </label>
        <input
          type="datetime-local"
          id="trading_pair"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Trading Pair"
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          End Time
        </label>
        <input
          type="datetime-local"
          id="trading_pair"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Trading Pair"
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </div>

      <div className="modal-action">
        <button
          type="submit"
          className={`text-white ${
            loading ? "bg-gray-700" : "bg-blue-700"
          } hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          onClick={() => response()}
          disabled={loading}
        >
          Submit
        </button>
        <form method="dialog">
          <button className="btn mx-2">Close</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
