// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./ERC721.sol";

contract SuperMarioWorld is ERC721 {
    string public name; //ERC721 Metadata
    string public symbol; //ERC721 Metadata
    uint256 public tokenCount;
    mapping(uint256 => string) private _tokenURIs;

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    // Returns a URL that points to the metadata
    function tokenURI(uint256 _tokenId) public view returns (string memory) {
        ownerOf(_tokenId);
        return _tokenURIs[_tokenId];
    }

    // Mint new NFT inside collection
    function mint(string memory _tokenURI) public {

        tokenCount += 1; // tokenId - autoincrease
        _balances[msg.sender] += 1;
        _owners[tokenCount] = msg.sender;
        _tokenURIs[tokenCount] = _tokenURI;

        emit Transfer(address(0), msg.sender, tokenCount);
    }

    // Check contract support interface
    function supportsInterface(bytes4 _interfaceId) public pure override returns(bool) {
        return _interfaceId == InterfaceSignature_ERC721
            || _interfaceId == InterfaceSignature_ERC721Metadata;
    }
}