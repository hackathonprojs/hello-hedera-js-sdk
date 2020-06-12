const HederaClient = require("./hedera-client");
const { AccountBalanceQuery } = require("@hashgraph/sdk");

async function getBalance() {
    const balance = await new AccountBalanceQuery()
        .setAccountId("0.0.65404")
        .execute(HederaClient);

    console.log(`${HederaClient._operatorAccount} balance = ${balance.value()}`);
}

getBalance();