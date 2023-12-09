import { useActiveChainId } from "./useActiveChainId";
import { useContractRead, useContractWrite } from "wagmi";
import CompFactory from "@/configs/abi/compFactoryABI.json";
import { contracts } from "@/configs/contracts";

//Read Calls

export const useCompFactoryRead = ({ functionName, args, ...rest }: any) => {
  const chainId = useActiveChainId();
  const { data, isError, isLoading, error, refetch, ...others } =
    useContractRead({
      // @ts-ignore
      address: contracts.compFactory[chainId as any],
      abi: CompFactory,
      functionName,
      args,
      chainId,

      ...rest,
    });
  return { data, isError, isLoading, error, refetch, ...others };
};
export const useTradingCompName = (name: string) => {
  const data = useCompFactoryRead({
    functionName: "findTradingCompByName",
    args: [name],
  });

  return data;
};

//Write Calls

export const useCompFactoryWrite = ({ functionName, args, ...rest }: any) => {
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
    address: contracts.compFactory[chainId as any],
    abi: CompFactory,
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

export const useCreateTradingComp = (args: any, ...others: any) => {
  const data = useCompFactoryWrite({
    functionName: "deployTradingComp",
    args: [...args],
    ...others,
  });
  return data;
};