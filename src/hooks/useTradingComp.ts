import { useActiveChainId } from "./useActiveChainId";
import { useContractRead, useContractWrite } from "wagmi";
import TradingComp from "@/configs/abi/tradingCompABI.json";

//Read Calls

export const useTradingCompRead = ({
  contractAddress,
  functionName,
  args,
  ...rest
}: any) => {
  const chainId = useActiveChainId();
  const { data, isError, isLoading, error, refetch, ...others } =
    useContractRead({
      // @ts-ignore
      address: contractAddress,
      abi: TradingComp,
      functionName,
      args,
      chainId,

      ...rest,
    });
  return { data, isError, isLoading, error, refetch, ...others };
};
export const useTradingCompTime = (name: string) => {
  const startTime = useTradingCompRead({
    functionName: "startTime",
    args: [],
  });

  const regTime = useTradingCompRead({
    functionName: "regTime",
    args: [],
  });
  const endTime = useTradingCompRead({
    functionName: "endTime",
    args: [],
  });

  return { regTime, startTime, endTime };
};

export const useTradingCompStatus = (name: string) => {
  const data = useTradingCompRead({
    functionName: "getCompStatus",
    args: [],
  });
  return data;
};

export const useUserData = (name: string) => {
  const data = useTradingCompRead({
    functionName: "userInfo",
    args: [],
  });
  return data;
};


//Write Calls

export const useTradingCompWrite = ({contractAddress, functionName, args, ...rest }: any) => {
  const chainId = useActiveChainId();
  const {
    data,
    isError,
    isLoading,
    error,
    write,
    writeAsync,
    reset,
    isSuccess,
  } = useContractWrite({
    // @ts-ignore
    address: contractAddress,
    abi: TradingComp,
    functionName,
    args,
    chainId,
    cacheOnBlock: true,
    ...rest,
  });
  return {
    data,
    isError,
    isLoading,
    error,
    write,
    writeAsync,
    reset,
    isSuccess,
  };
};

export const useRegister = ( ...others: any) => {
  const data = useTradingCompWrite({
    functionName: "registerForComp",
    args: [],
    ...others,
  });
  return data;
};
