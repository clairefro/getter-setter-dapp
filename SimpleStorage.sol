pragma solidity 0.5.14;

contract SimpleStorage {
    uint x; 
    function get() public view returns (uint) {
        return x;
    }

    function set(uint y) public {
        x = y;
    }
}