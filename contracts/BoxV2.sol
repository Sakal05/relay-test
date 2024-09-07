// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import {Box} from "./Box.sol";

/// @title BoxV2
/// @notice An improved box with objects inside.
/// @custom:oz-upgrades-from Box
contract BoxV2 is Box {
    /*//////////////////////////////////////////////////////////////
                                FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    /// @notice Add an object to the box.
    function addObject() external {
        numberOfObjects += 1;
    }

    /// @notice Add an object to the box.
    function multiplyByTwo() external {
        numberOfObjects *= 2;
    }

    /// @notice Returns the box version.
    function boxVersion() external pure returns (uint256) {
        return 2;
    }
}
