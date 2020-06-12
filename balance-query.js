// this code comes from the video "Coding with Cooper - Your first query - JavaScript" 2020/05/12
// https://www.youtube.com/watch?v=mEYjBIEc_e8
const HederaClient = require("./hedera-client");
const { AccountBalanceQuery } = require("@hashgraph/sdk");

// this doesn't work.  timed out. 
// we should try newer code
async function getBalance() {
    const balance = await new AccountBalanceQuery()
        .setAccountId("0.0.65404")
        .execute(HederaClient);

    console.log(`${HederaClient._operatorAccount} balance = ${balance.value()}`);
}

getBalance();