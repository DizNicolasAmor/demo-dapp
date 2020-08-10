// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract MyToken {
    string greeting = "Hello world!";

    constructor() public {}

    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
