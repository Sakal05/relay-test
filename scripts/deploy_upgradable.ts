import { ethers, defender } from "hardhat";

async function main() {
  const Box = await ethers.getContractFactory("Zin");

  const upgradeApprovalProcess = await defender.getUpgradeApprovalProcess();
  console.log("Upgradable Address: ", upgradeApprovalProcess.address);
  if (upgradeApprovalProcess.address === undefined) {
    throw new Error(
      `Upgrade approval process with id ${upgradeApprovalProcess.approvalProcessId} has no assigned address`
    );
  }

  const deployment = await defender.deployProxy(
    Box,
    [99, upgradeApprovalProcess.address],
    { initializer: "initialize" }
  );

  await deployment.waitForDeployment();

  console.log(`Contract deployed to ${await deployment.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
