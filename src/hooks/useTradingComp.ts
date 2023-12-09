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
export const useTradingCompTime = (contractAddress: string) => {
  const startTime = useTradingCompRead({contractAddress,
    functionName: "startTime",
    args: [],
  });

  const regTime = useTradingCompRead({contractAddress,
    functionName: "regTime",
    args: [],
  });
  const endTime = useTradingCompRead({contractAddress,
    functionName: "endTime",
    args: [],
  });

  return { regTime, startTime, endTime };
};

export const useTradingCompStatus = (contractAddress: string) => {
  const data = useTradingCompRead({contractAddress,
    functionName: "getCompStatus",
    args: [],
  });
  return data;
};

export const useUserData = (contractAddress: string, address:string) => {
  const data = useTradingCompRead({
    contractAddress,
    functionName: "userInfo",
    args: [address],
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

export const useRegister = (contractAddress:string) => {
  const data = useTradingCompWrite({contractAddress,
    functionName: "registerForComp"
  });
  return data;
};
