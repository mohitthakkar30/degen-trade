import { DEFAULT_CHAIN_ID } from "@/configs";
// import { useLocalStorage } from "react-use";
 import { useChainId } from "wagmi";

export const useActiveChainId = () => {
 const chainId= useChainId();
  return chainId?chainId : DEFAULT_CHAIN_ID;
};
