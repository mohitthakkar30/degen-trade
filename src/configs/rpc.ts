import { ChainId } from "./chainIds";

const RPC: { [chainId in ChainId]?: string } = {
  [ChainId.SCROLL_SEPOLIA]: "https://sepolia-rpc.scroll.io",
};

export default RPC;
