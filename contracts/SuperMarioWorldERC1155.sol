// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./ERC1155.sol";

contract SuperMarioWorlderc1155 is ERC1155 {
    string public name; //ERC1155 Metadata
    string public symbol; //ERC1155 Metadata
    uint256 public tokenCount;
    mapping(uint256 => string) private _tokenURIs;

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    function tokenURI(uint256 _tokenId) public view returns (string memory) {
        return _tokenURIs[_tokenId];
    }

    function mint(uint256 _amount, string memory _tokenURI) external {
        tokenCount += 1; // tokenId - autoincrease
        _balances[tokenCount][msg.sender] += _amount;
        _tokenURIs[tokenCount] = _tokenURI;

        emit TransferSingle(msg.sender, address(0), msg.sender, tokenCount, _amount);
    }

    function supportsInterface(bytes4 _interfaceId) public pure override returns(bool) {
        return _interfaceId == ERC1155_ERC165
            || _interfaceId == ERC165;
    }
}