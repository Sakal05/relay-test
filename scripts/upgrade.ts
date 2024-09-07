import { ethers, defender } from "hardhat";

async function main() {
  const LoyKobV2 = await ethers.getContractFactory("LoyKobV2");

  const proposal = await defender.proposeUpgradeWithApproval(
    "0x6041B4C28E7792e16e846aC374Fa662e9cdA9F62",
    LoyKobV2
  );
  // await defender.upgradeProxy()

  console.log(`Upgrade proposed with URL: ${proposal.url}`, proposal);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
