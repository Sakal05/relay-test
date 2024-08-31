import { ethers, defender } from "hardhat";
// import { DefenderDeployOptions } from "@openzeppelin/hardhat-upgrades/dist/utils";

async function main() {
  const RewardContract = await ethers.getContractFactory("GaaveiRewardToken");
  //   const upgradeApprovalProcess = await defender.getUpgradeApprovalProcess();

  //   if (upgradeApprovalProcess.address === undefined) {
  //     throw new Error(
  //       `Upgrade approval process with id ${upgradeApprovalProcess.approvalProcessId} has no assigned address`
  //     );
  //   }

  const deployment = await defender.deployContract(RewardContract, {
    unsafeAllowDeployContract: true,
  });

  await deployment.waitForDeployment();

  console.log(`Contract deployed to ${await deployment.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
