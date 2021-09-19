const Web3 = require("Web3");

const web3 = new Web3("http://localhost:8545");

const privateKey = `0xbdac58d55dd855b5f8b0346a50859b41b4d903f4a4f394b96dd78d1dc3fab542`;
const myAccount = web3.eth.accounts.wallet.add(privateKey);

// console.log(myAccount);

module.exports = {
  web3,
  myAccount,
};
