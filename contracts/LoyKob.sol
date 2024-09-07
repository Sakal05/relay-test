// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {ERC721Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract LoyKobV2 is Initializable, UUPSUpgradeable, OwnableUpgradeable, ERC721Upgradeable {
    uint256 counter;
    uint256 public jlom;

    function initialize(address owner) public initializer {
        __UUPSUpgradeable_init();
        __Ownable_init(owner);
        __ERC721_init("NhBartSakal", "NBS");
        counter = 0;
    }

    function increment() external {
        counter += 1;
    }

    function incrementJlom() external {
        jlom += 1;
    }

    /// @dev Upgrades the implementation of the proxy to new address.
    function _authorizeUpgrade(address) internal override onlyOwner {}
}
