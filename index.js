/**
 * 
 * 
 */

 /**
  * in .env file
  * # Operator ID and Key
OPERATOR_ID=YOUR-TESTNET-ACCOUNT-ID
OPERATOR_KEY=YOUR-TESTNET-PRIVATE-KEY
  */

// Import the Hedera Hashgraph JS SDK
// Example uses Hedera JavaScript SDK v1.1.12
const { Client, AccountBalanceQuery } = require("@hashgraph/sdk");
// Allow access to our .env file variables
require("dotenv").config();

// Grab your account ID and private key from the .env file
const operatorAccountId = process.env.OPERATOR_ID;
const operatorPrivateKey = process.env.OPERATOR_KEY;


// If we weren't able to grab it, we should throw a new error
if (operatorPrivateKey == null ||
    operatorAccountId == null ) {
    throw new Error("environment variables OPERATOR_KEY and OPERATOR_ID must be present");
}

// Create our connection to the Hedera network
// The Hedera JS SDK makes this reallyyy easy!
const client = Client.forTestnet();

// Set your client account ID and private key used to pay for transaction fees and sign transactions
client.setOperator(operatorAccountId, operatorPrivateKey);

// Hedera is an asynchronous environment :)
(async function() {

  // Attempt to get and display the balance of our account
  var currentBalance = await new AccountBalanceQuery().setAccountId(operatorAccountId).execute(client);
  console.log("account balance:", currentBalance);
})();
