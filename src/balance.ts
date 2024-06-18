import { JsonRpcProvider, Wallet } from "ethers";
import { PRIVATE_KEY, RPC_URL } from "./config";

const provider = new JsonRpcProvider(RPC_URL);
const wallet = new Wallet(PRIVATE_KEY, provider);

async function Balance(): Promise<string> {
    const balance = await provider.getBalance(wallet.address);
    return balance.toString(); // Convert BigInt to string
}

export default Balance;
