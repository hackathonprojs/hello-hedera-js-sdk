/**
 * send some hbar.
 */

require("dotenv").config();

const { Client, CryptoTransferTranscation, CryptoTransferTransaction } = require("@hashgraph/sdk");

async function transferHbar() {
    // define client connection to the hedera testnet
    const myClient = Client.forTestnet();
    myClient.setOperator(process.env.OPERATOR_ID, process.env.OPERATOR_KEY);
    
    // unit is tinybar.  1 tinybar 1/1000000 hbar
    const transactionId = await new CryptoTransferTransaction()
        .addSender(process.env.OPERATOR_ID, 1)
        .addRecipient("0.0.3", 1)
        .execute(myClient);

    // getting the receipt of the transaction.  post-hedera consensus, to confirm its success.
    const transactionReceipt = await transactionId.getReceipt(myClient);

    console.log("receipt:", transactionReceipt);
}

transferHbar();