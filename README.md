# EIP-4337 Account Abstraction Assignment

This repository demonstrates  a basic implementation of EIP-4337 (Account Abstraction) using Hardhat in a GitHub Codespace. It includes a `SimpleAccount` smart contract, deployment script, and a test script to simulate a UserOperation.

## Prerequisites

- GitHub account
- Node.js and npm (included in Codespace)
- Basic understanding of Ethereum and Solidity
- Deployment





Start the Hardhat node:

npx hardhat node



Deploy the SimpleAccount contract:

npx hardhat run scripts/deploy.js --network localhost



Note the deployed contract address (e.g., 0x5FbDB2315678afecb367f032d93F642f64180aa3).

Testing





Update testUserOp.js with the deployed contract address.



Run the test script:

npx hardhat run scripts/testUserOp.js --network localhost

Notes





Uses placeholder EntryPoint address (0x000...000) for local testing.



testUserOp.js bypasses validateUserOp (commented out) due to missing EntryPoint simulation; production requires a valid EntryPoint and signature.



testUserOp.js uses a placeholder signature ("0x"), which may cause validateUserOp to fail if enabled.



SimpleAccount.sol warnings (unused parameter, variable, mutability) are non-critical.



Handles BigInt serialization with serializeBigInt for ethers.js v6.



Codespace restarts reset node state; redeploy to ensure valid contract address.

Troubleshooting





If NotImplementedError: Method 'HardhatEthersProvider.resolveName' is not implemented, verify simpleAccountAddress in testUserOp.js is a valid Ethereum address (e.g., 0x123...), not an ENS name or malformed string (e.g., new_address0x...).



If call revert exception, redeploy and update testUserOp.js address.



If HH108: Cannot connect, verify node: lsof -i :8545 and curl http://127.0.0.1:8545. Restart: kill -9 <PID>; npx hardhat node.



If 'Not EntryPoint' error, ensure validateUserOp is commented out in testUserOp.js.
