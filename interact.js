const { web3, myAccount } = require("./utils");
const { abi, address } = require("./contractArtifacts");

let contract = new web3.eth.Contract(JSON.parse(abi), address);

// console.log(contract);

async function get() {
  const res = await contract.methods.get().call();
  return res;
}

// get();

async function set(value) {
  // we use send because we are sending this transaction and paying gas to update chain
  const res = await contract.methods.set(value).send({
    from: myAccount.address,
    gas: 800000,
  });
  return res.transactionHash;
}

get();

// set(4);
// example response. Note that "to" is the contract address

// {
//     transactionHash: '0x3ab6039c63f7cf0abe186df7cf649e3445726967507e820b7bdb1552e492a785',
//     transactionIndex: 0,
//     blockHash: '0x7fdd94ac683d92e5ef2b8b1208193332401ee7e0aa40f30cb0feda23f82df142',
//     blockNumber: 3,
//     from: '0xfd1a137e1ea0d7894cfac5a8006bcb1e27ded4c9',
//     to: '0xa294d6613c87d8c90e7a7d12b47a6d4659ca631b',
//     gasUsed: 41602,
//     cumulativeGasUsed: 41602,
//     contractAddress: null,
//     status: true,
//     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
//     events: {}
//   }

// for interacting with the browser
window.addEventListener("load", () => {
  document.getElementById("get").onclick = () => {
    get().then((r) => {
      document.getElementById("resultOfGet").innerHTML = r;
    });
  };
  document.getElementById("set").onclick = () => {
    val = document.getElementById("value").value;
    set(val).then((r) => {
      document.getElementById("resultOfSet").innerHTML = r;
    });
  };
});
