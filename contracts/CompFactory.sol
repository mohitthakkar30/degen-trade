// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./TradingComp.sol";

contract TradingCompFactory is Ownable {
    // This mapping relates a human-readable name for each trading comp contract to its address
    mapping(string => address) public tradingComps;
    event TradingCompDeployed(string compName, address indexed compAddress);
     constructor() Ownable(msg.sender){}
    function deployTradingComp(uint256 regTime,uint256 startTime,uint256 endTime, string calldata compName, address compOwner, address[] calldata pairs) public returns (address) {
        require(bytes(compName).length > 0, "Competetion name cannot be empty");
        require(tradingComps[compName] == address(0), "Competetion with this name already exists");

        // Creating a new instance of the TradingComp contract
        TradingComp newComp = new TradingComp(regTime,startTime,endTime,compOwner, pairs);
        address newCompAddress = address(newComp);

        // Store the newly created TradingComp contract address in the mapping searcheable by the provided compName
        tradingComps[compName] = newCompAddress;

        emit TradingCompDeployed(compName, newCompAddress);
        return newCompAddress;
    }

    function findTradingCompByName(string calldata compName) public view returns (address) {
        require(tradingComps[compName] != address(0), "Competetion address not found");
        return tradingComps[compName];
    }

}