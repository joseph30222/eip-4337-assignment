const { ethers } = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();
  const simpleAccountAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Replace with the address from deploy.js
  const simpleAccount = await ethers.getContractAt("SimpleAccount", simpleAccountAddress, signer);

  // Simulate a UserOperation (simplified)
  const userOp = {
    sender: simpleAccountAddress,
    nonce: 0,
    initCode: "0x",
    callData: simpleAccount.interface.encodeFunctionData("execute", [
      signer.address,
      ethers.utils.parseEther("0.01"),
      "0x",
    ]),
    callGasLimit: 100000,
    maxFeePerGas: ethers.utils.parseUnits("1", "gwei"),
    maxPriorityFeePerGas: ethers.utils.parseUnits("1", "gwei"),
    signature: "0x", // Placeholder: In a real setup, sign with owner's private key
  };

  // Simulate validation (in a real setup, this goes to EntryPoint)
  const userOpHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(JSON.stringify(userOp)));
  const validation = await simpleAccount.validateUserOp(
    userOp.callData,
    userOpHash,
    0
  );
  console.log("Validation result:", validation.toString());

  // Simulate execution
  await simpleAccount.execute(
    signer.address,
    ethers.utils.parseEther("0.01"),
    "0x",
    { gasLimit: 200000 }
  );
  console.log("UserOperation executed: Transfer 0.01 ETH to", signer.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1);
});