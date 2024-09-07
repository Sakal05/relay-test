import { ethers, defender } from "hardhat";
import { Defender } from "@openzeppelin/defender-sdk";
import {
  DefenderRelayProvider,
  DefenderRelaySigner,
} from "defender-relay-client/lib/ethers/index";
import "dotenv/config";

const creds = {
  apiKey: process.env.RELAYER_KEY ?? "",
  apiSecret: process.env.RELAYER_SECRET ?? "",
};
const client = new Defender(creds);
async function main() {
  const Zin = await ethers.getContractFactory("Zin");
  // const provider = client.relaySigner.getProvider();
  const provider = new DefenderRelayProvider(creds);
  const signer = new DefenderRelaySigner(creds, provider, {
    speed: "fast",
  });

  // const signer = await client.relaySigner.getSigner(provider);
  // const upgradeApprovalProcess = await defender.getUpgradeApprovalProcess();
  // console.log("Upgradable Address: ", upgradeApprovalProcess.address);

  //   if (upgradeApprovalProcess.address === undefined) {
  //     throw new Error(
  //       `Upgrade approval process with id ${upgradeApprovalProcess.approvalProcessId} has no assigned address`
  //     );
  //   }
  const contract = await ethers.getContractAt(
    "Zin",
    "0xd1231E08FFeBd8F0AC925AEC660A3a5e28B809C7"
  );
  const num = await contract.num();
  console.log("State - Num: ", num?.toString());

  //   const deployment = await defender.deployProxy(
  //     Box,
  //     [5, upgradeApprovalProcess.address, "Upgrade Sak", "UPS"],
  //     { initializer: "initialize" }
  //   );

  //   await deployment.waitForDeployment();

  //   console.log(`Contract deployed to ${await deployment.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
