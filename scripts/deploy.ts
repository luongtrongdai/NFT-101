import { ethers } from "hardhat";

async function main() {
  const SuperMarioWorldOZ = await ethers.getContractFactory("SuperMarioWorldOZ");
  const superMarioWorld = await SuperMarioWorldOZ.deploy("SuperMarioWorldOZ", "SPMOZ");

  await superMarioWorld.deployed();

  console.log("Success! Contract was deployed to: ", superMarioWorld.address);

  await superMarioWorld.mint("https://ipfs.io/ipfs/QmcPFZ5dy3Q4Gt7UoNexwBvJvCxdmWgap1A9pUZBig4Z2J");

  console.log("NFT successfull minted");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
