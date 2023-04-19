import { ethers } from "hardhat";

async function main() {
  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorld");
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorld", "SPM");

  await superMarioWorld.deployed();

  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  await superMarioWorld.mint("https://ipfs.io/ipfs/QmVrZ2bUpCj7M95FTnGPwogiX6oJwoeKPxoCidRfAZqeHY");

  console.log("NFT successfull minted");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
