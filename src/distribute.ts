import { ethers, JsonRpcProvider, Wallet } from "ethers";

import { DISTRIBUTION_VALUE, PRIVATE_KEY, RPC_URL } from "./config";

const provider = new JsonRpcProvider(RPC_URL);
const wallet = new Wallet(PRIVATE_KEY, provider);

interface DistributeParams {
  address: string;
}

async function Distribute({ address }: DistributeParams) {
  try {
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.formatEther(balance);
    const threshold = 0.000001;

    if (parseFloat(balanceInEth) < threshold) {
      const tx = await wallet.sendTransaction({
        to: address,
        value: DISTRIBUTION_VALUE,
      });
      return tx;
    } else {
      return { message: `Balance of address ${address} is sufficient: ${balanceInEth} ETH` };
    }
  } catch (error) {
    console.error("Distribute error:", error);
    throw error;
  }
}

export default Distribute;
