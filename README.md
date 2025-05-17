# EIP-4337 Account Abstraction Assignment

This repository demonstrates  a basic implementation of EIP-4337 (Account Abstraction) using Hardhat in a GitHub Codespace. It includes a `SimpleAccount` smart contract, deployment script, and a test script to simulate a UserOperation.

## Prerequisites

- GitHub account
- Node.js and npm (included in Codespace)
- Basic understanding of Ethereum and Solidity

## Setup

1. Clone this repository and open it in a GitHub Codespace.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Compile the contract:

   ```bash
   npx hardhat compile
   ```

## Deployment

1. Start a local Hardhat node:

   ```bash
   npx hardhat node
   ```
2. Deploy the `SimpleAccount` contract:

   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

## Testing

1. Update `testUserOp.js` with the deployed contract address.
2. Run the test script:

   ```bash
   npx hardhat run scripts/testUserOp.js --network localhost
   ```

## Explanation

- **SimpleAccount.sol**: An EIP-4337-compliant smart contract wallet that validates and executes UserOperations.
- **deploy.js**: Deploys the contract to the local network.
- **testUserOp.js**: Simulates a UserOperation to transfer 0.01 ETH.
- **EIP-4337**: Enables smart contract wallets to act like EOAs, improving user experience with features like gas sponsorship and batched transactions.

## Resources

- EIP-4337 Specification
- eth-infinitism/account-abstraction
- Hardhat Documentation

## Notes

- This is a simplified setup for learning purposes. A full EIP-4337 implementation requires a deployed EntryPoint contract and a Bundler service.
- For questions, refer to the QuickNode Guide.
