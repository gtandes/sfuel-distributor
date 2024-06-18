import dotenv from "dotenv";
import { parseEther } from "ethers";

dotenv.config();

const DISTRIBUTION_VALUE = parseEther("0.000001");
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
const RPC_URL = process.env.RPC_URL as string;

if (!PRIVATE_KEY) throw new Error("Missing Private Key");
if (!RPC_URL) throw new Error("Missing RPC URL");

export { DISTRIBUTION_VALUE, PRIVATE_KEY, RPC_URL };