// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

contract SimpleAccount is Initializable, UUPSUpgradeable {
    using ECDSA for bytes32;

    address public owner;
    address public entryPoint;

    event SimpleAccountInitialized(address indexed entryPoint, address indexed owner);

    modifier onlyEntryPoint() {
        require(msg.sender == entryPoint, "Not EntryPoint");
        _;
    }

    constructor(address _entryPoint) {
        entryPoint = _entryPoint;
    }

    function initialize(address _owner) public initializer {
        owner = _owner;
        emit SimpleAccountInitialized(entryPoint, owner);
    }

    function validateUserOp(
        bytes calldata userOp,
        bytes32 userOpHash,
        uint256 missingAccountFunds
    ) external onlyEntryPoint returns (uint256 validationData) {
        require(userOpHash.recover(userOp[0:userOp.length-65]) == owner, "Invalid signature");
        return 0;
    }

    function execute(address dest, uint256 value, bytes calldata func) external onlyEntryPoint {
        (bool success, bytes memory result) = dest.call{value: value}(func);
        require(success, "Execution failed");
    }

    function _authorizeUpgrade(address) internal override onlyEntryPoint {}
}