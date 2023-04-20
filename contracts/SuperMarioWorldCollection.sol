// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SuperMarioWorldCollection is ERC1155, Ownable {
    using Strings for string;
    string public name; //ERC1155 Metadata
    string public symbol; //ERC1155 Metadata
    uint256 public tokenCount;
    string public baseUri;

    constructor(string memory _name, string memory _symbol, string memory _baseUri) ERC1155(_baseUri) {
        name = _name;
        symbol = _symbol;
        baseUri = _baseUri;
    }

    function mint(uint256 _amount) external {
        tokenCount += 1; // tokenId - autoincrease
        _mint(msg.sender, tokenCount, _amount, "");
    }

    // baseUri + /{id}.json
    function uri(uint256 _tokenId) public override view returns (string memory) {
        return string (
            abi.encodePacked(baseUri, Strings.toString(_tokenId), ".json")
        );
    }
}