// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.12;
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract TradingComp is Ownable {
    enum CompStatus {
        Registration,
        Open,
        Close
    }
    uint256 public startTime;
    uint256 public endTime;
    uint256 public regTime;

    mapping(address => UserInfo) public userInfo;
    address[] public pairAddresses;

    struct UserInfo {
        bool hasRegistered;
        bool hasClaimed;
        uint256 userRegTime;
    }

    event Register(address _address, uint256 _regTime);
    event NewPairSet(address _pair);
    event RemovePair(address _pair);
    event NewStartTime(uint256 _startTime, uint256 _prevTime);
    event NewEndTime(uint256 _endTime, uint256 _prevTime);
    event NewRegTime(uint256 _regTime, uint256 _prevTime);

    constructor(        
        uint256 _regTime,
        uint256 _startTime,
        uint256 _endTime,
        address _compOwner,
        address[] memory _pairs
    ) Ownable(msg.sender) {
        setRegTime(_regTime);
        setStartTime(_startTime);
        setEndTime(_endTime);
        setPairAddresses(_pairs);
        transferOwnership(_compOwner);
    }

    function registerForComp() external {
        require(!userInfo[msg.sender].hasRegistered, "User Already Registered");

        require(
            block.timestamp >= regTime && block.timestamp <= startTime,
            "Registration Closed For Competetion"
        );

        UserInfo storage newUserInfo = userInfo[msg.sender];
        newUserInfo.hasRegistered = true;
        newUserInfo.userRegTime = block.timestamp;

        emit Register(msg.sender, block.timestamp);
    }

    function getCompStatus() external view returns (CompStatus status) {
        if (block.timestamp >= regTime && block.timestamp <= startTime) {
            return CompStatus.Registration;
        } else if (block.timestamp >= startTime && block.timestamp <= endTime) {
            return CompStatus.Open;
        } else if (block.timestamp >= endTime) {
            return CompStatus.Close;
        }
    }

    function setPairAddresses(address[] memory _pairs) public onlyOwner {
        for (uint i = 0; i < _pairs.length; i++) {
            require(_pairs[i] != address(0), "Invalid Pair Address");
            bool isAlreadyAdded = false;
            for (uint j = 0; j < pairAddresses.length; j++) {
                if (pairAddresses[j] == _pairs[i]) {
                    isAlreadyAdded = true;
                    break;
                }
            }

            if (!isAlreadyAdded) {
                pairAddresses.push(_pairs[i]);
                emit NewPairSet(_pairs[i]); 
            }
        }
    }

    function removePairAddress(address _pair) public onlyOwner {
        require(_pair != address(0), "Invalid Pair Address");

        int256 indexToRemove = -1;
        for (uint i = 0; i < pairAddresses.length; i++) {
            if (pairAddresses[i] == _pair) {
                indexToRemove = int256(i);
                break;
            }
        }

        require(indexToRemove >= 0, "Pair Address Not Found");
        for (
            uint i = uint256(indexToRemove);
            i < pairAddresses.length - 1;
            i++
        ) {
            pairAddresses[i] = pairAddresses[i + 1];
        }

        pairAddresses.pop();
        emit RemovePair(_pair); 
    }

    function setStartTime(uint256 _startTime) public onlyOwner {
        require(
            _startTime > regTime,
            "Start time should be greater than registration time"
        );
        emit NewStartTime(_startTime, startTime);
        startTime = _startTime;
    }

    function setEndTime(uint256 _endTime) public onlyOwner {
        require(
            _endTime > startTime && block.timestamp <_endTime,
            "End time should be greater than startTime"
        );
        emit NewEndTime(_endTime, endTime);
        endTime = _endTime;
    }

    function setRegTime(uint256 _regTime) public onlyOwner {
        require(
            _regTime > block.timestamp,
            "Reg time should be greater than current block timestamp"
        );
        emit NewRegTime(_regTime, regTime);
        regTime = _regTime;
    }
}
