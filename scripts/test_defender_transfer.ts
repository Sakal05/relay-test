// const { ethers } = require('ethers');
import { ethers } from "hardhat";
import { Defender } from "@openzeppelin/defender-sdk";
import contract from "../artifacts/contracts/GaaveiRewardToken.sol/GaaveiRewardToken.json";
import "dotenv/config";

const KEY = process.env.RELAYER_KEY;
const SECRET = process.env.RELAY_SECRET;
const D_KEY = process.env.DEFENDER_KEY;
const D_SECRET = process.env.DEFENDER_SECRET;
const ERC20_ADDRESS = process.env.CONTRACT_ADDRESS ?? "";
const CONTRACT_ABI = contract.abi;

// const credentials = { relayerApiKey: KEY, relayerApiSecret: SECRET };

async function main() {
  const credentials = { apiKey: D_KEY, apiSecret: D_SECRET };
  const client = new Defender(credentials);
  //   const provider: any = client.relaySigner.getProvider();
  //   const signer: any = await client.relaySigner.getSigner(provider, {
  //     speed: "fast",
  //     validForSeconds: 3200,
  //   });
  //   const relayerAddress = await signer.getAddress();
  const actions = await client.action.list();
  console.log("Actions: ", actions);

  const relays = await client.relay.list();
  console.log("Relays: ", relays);

  const runAction = await client.action.listActionRuns(
    actions.items[0].actionId,
    {}
  );
  // client.relaySigner.sign()

  console.log("run action: ", runAction);

  //   const erc20 = new ethers.Contract(ERC20_ADDRESS, CONTRACT_ABI, signer);
  //   const tx = await erc20.transfer(
  //     "0x5852231D8a00306A67DfB128AEd50c1573411d60",
  //     (1e18).toString()
  //   );
  //   const mined = await tx.wait();
  //   console.log("Mined: ", mined);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
