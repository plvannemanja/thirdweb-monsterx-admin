import { getContract } from "thirdweb";
import { polygonAmoy } from "thirdweb/chains";
import { client } from "./client";
// get a contract
export const contract = getContract({
  // the client you have created via `createThirdwebClient()`
  client,
  // the chain the contract is deployed on
  chain: polygonAmoy,
  // the contract's address
  address: "0x2dd0B003A8B034e4AFd7baa3Ab9124C6e7c2F118",
});

export const address = "0x2dd0B003A8B034e4AFd7baa3Ab9124C6e7c2F118";