// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract SchfiftyFiveCoin is ERC20 {
    constructor() ERC20("SchfiftyFiveCoin", "SFC") {
      _mint(msg.sender, 55 * 10 ** decimals());
    }
}
