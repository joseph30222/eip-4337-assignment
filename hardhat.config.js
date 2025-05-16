require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",// Match SimpleAccount.sol version
  networks: {
    hardhat: {
      chainId: 1337,
       },
    localhost: {
      url: "http://0.0.0.0:8545/",
      chainId: 1337
    },
  },
};

