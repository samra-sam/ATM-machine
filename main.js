#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 28311;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number"
    }
]);
if (pinAns.pin === myPin) {
    console.log("Correct pin code");
    let actionAns = await inquirer.prompt([
        {
            name: "action",
            message: "select the option",
            type: "list",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (actionAns.action === "withdraw amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                message: "select a withdraw method",
                type: "list",
                choices: ["fast cash", "enter amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "fast cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    message: "Selcet amount:",
                    type: "list",
                    choices: [1000, 3000, 5000, 7000, 10000, 15000, 20000]
                }
            ]);
            if (fastcashAns.fastcash > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= fastcashAns.fastcash;
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "enter amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`Your remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (actionAns.action === "check balance") {
        console.log(`Your account balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
