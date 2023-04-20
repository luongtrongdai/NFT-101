import { ethers } from "hardhat";

async function main() {
  const SuperMarioWorlderc1155 = await ethers.getContractFactory("SuperMarioWorlderc1155");
  const superMarioWorlderc1155 = await SuperMarioWorlderc1155.deploy("SuperMarioWorld1155", "SPME");

  await superMarioWorlderc1155.deployed();

  console.log("Success! Contract was deployed to: ", superMarioWorlderc1155.address);

  await superMarioWorlderc1155.mint(5, "https://ipfs.io/ipfs/QmVauNxyfXoEy9ukKTxL2RCyJRR2wVCyLqrtTmPRxXDyxb");

  console.log("NFT successfull minted");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
