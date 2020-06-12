// this comes from the video tutorial "Coding with Cooper - Setup your local environment - JavaScript"
// https://www.youtube.com/watch?v=afQOcY9DfjY

require("dotenv").config();
const { Client } = require("@hashgraph/sdk");

const operatorAccountId = process.env.OPERATOR_ID;
const operatorPrivateKey = process.env.OPERATOR_KEY;

// Create our connection to the Hedera network
// The Hedera JS SDK makes this reallyyy easy!
const HederaClient = Client.forTestnet();

// Set your client default account ID and private key used to pay for transaction fees and sign transactions
HederaClient.setOperator(operatorAccountId, operatorPrivateKey);


// alternative way to specify client
// const HederaClient = new Client({
//     network: { "0.testnet.hedera.com:50211": "0.0.3" }, // this is version 1.0.1.  check doc for more detail
//     operator: {
//         account: process.env.OPERATOR_ID,
//         privateKey: process.env.OPERATOR_KEY
//     }
// });

// 0.testnet.hedera.com:50211
// 0.0.3
// 1.testnet.hedera.com:50211
// 0.0.4
// 2.testnet.hedera.com:50211
// 0.0.5
// 3.testnet.hedera.com:50211
// 0.0.6


module.exports = HederaClient;