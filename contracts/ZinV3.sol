// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import {Zin} from "./Zin.sol";
/// @title Box
/// @notice A box with objects inside.

contract ZinV3 is Zin {
    /// @notice Multiply an object by 2 to the box.
    function multiplyByTwo() external {
        num *= 2;
    }

    /// @notice Multiply an object by 2 to the box.
    function moduloByTwo() external {
        num %= 2;
    }

    /// @notice Returns the box version.
    function dumaVersion() external pure returns (uint256) {
        return 3;
    }

    /// @notice Returns the box version.
    function multiplyByThree() external {
        num *= 3;
    }
}
