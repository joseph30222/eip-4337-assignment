const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const SimpleAccount = await ethers.getContractFactory("SimpleAccount");
  const entryPointAddress = "0x0000000000000000000000000000000000000000"; // Placeholder: Replace with actual EntryPoint address
  const simpleAccount = await SimpleAccount.deploy(entryPointAddress); // Pass entryPointAddress to the constructor

  await simpleAccount.waitForDeployment(); // Wait for the contract to be mined

  console.log("SimpleAccount deployed to:", await simpleAccount.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});