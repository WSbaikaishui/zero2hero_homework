// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock is Initializable {
    uint private number;
    string constant name = "Mozes";
     event NumberChanged(uint256 newNumber);
    //初始化函数
    function initialize(uint256 _initValue) public initializer {
        number = _initValue;
    }

    function setNumber(uint256 newNumber) public {
        number = newNumber;
        emit NumberChanged(newNumber);
    }

    // Reads the last value
    function getNumber() public view returns (uint256) {
        return number;
    }

    function getConstant() public pure returns (string memory){
        return string(abi.encodePacked("Name: ",name));
    }
}
