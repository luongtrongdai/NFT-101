import { ethers } from "hardhat";

async function main() {
  const SuperMarioWorldCollection = await ethers.getContractFactory("SuperMarioWorldCollection");
  const superMarioWorldCollection = await SuperMarioWorldCollection.deploy("SuperMarioWorldCollection",
    "SPMC",
    "https://ipfs.io/ipfs/QmWQ9wYf81Q6GeFZYYj6ewpZLjV4E5z4VX7ayNqv8tr9eq/");

  await superMarioWorldCollection.deployed();

  console.log("Success! Contract was deployed to: ", superMarioWorldCollection.address);

  let i = 0;
  while (i < 3) {
    await superMarioWorldCollection.mint(5 + i);
    ++i;
  }

  console.log("NFT successfull minted");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
