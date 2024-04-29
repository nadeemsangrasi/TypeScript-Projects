#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class MyBank {
    usersData = [];
    transactionHistory = [];
    async addInfo(fName, lName, age, phone) {
        let user = {
            firstName: fName,
            lastName: lName,
            age: age,
            phone: phone,
        };
        this.usersData.push(user);
        console.log(chalk.yellow("Account created with the following details:"));
        console.log("First Name:", fName);
        console.log("Last Name:", lName);
        console.log("Age:", age);
        console.log("Phone:", phone);
    }
    showUsers() {
        if (this.usersData.length !== 0) {
            for (let i = 0; i < this.usersData.length; i++) {
                for (let key in this.usersData[i]) {
                    console.log(chalk.whiteBright(`${key} : ${this.usersData[i][key]}`));
                }
            }
        }
        else {
            console.log(chalk.red("Please add users info first"));
        }
    }
    async doTransactions() {
        let user = this.usersData;
        let userHistory = this.transactionHistory;
        let pickCard = await inquirer.prompt([
            {
                message: chalk.yellow("Choose payment method"),
                type: "list",
                name: "card",
                choices: [chalk.cyan("Credit card"), chalk.cyan("Debit card")],
            },
        ]);
        async function paymentWithCredit(user) {
            if (user.length !== 0) {
                let isUserOrBalance = false;
                let getName = await inquirer.prompt([
                    {
                        name: "fname",
                        message: "Enter name to get amount",
                        type: "input",
                    },
                ]);
                for (let i = 0; i < user.length; i++) {
                    if (user[i].firstName == getName.fname &&
                        user[i].hasOwnProperty("balance") === true) {
                        isUserOrBalance = true;
                        let amountToDeduct = await inquirer.prompt([
                            {
                                name: "amount",
                                message: "Enter amount you want",
                                type: "number",
                            },
                        ]);
                        if (!isNaN(amountToDeduct.amount) && amountToDeduct.amount > 0) {
                            let balance = user[i].balance;
                            let charges = 100;
                            let amountToDeductTotal = amountToDeduct.amount + charges;
                            if (amountToDeductTotal <= balance) {
                                balance -= amountToDeductTotal;
                                user[i].balance = balance;
                                console.log(chalk.yellow(`Transaction successful\nUsername: ${getName.fname}\nTransaction type: credit card\nTransaction amount: ${amountToDeduct.amount}\nTransaction charges: ${charges}\nTotal transaction: ${amountToDeductTotal}`));
                                let findUser = userHistory.find((elem) => elem["User name"] == user[i].firstName &&
                                    elem["Transaction type"] == "Credit card");
                                if (findUser) {
                                    findUser.Transactions.push("PKR " + amountToDeductTotal);
                                }
                                else {
                                    userHistory.push({
                                        "User name": user[i].firstName,
                                        "Transaction type": "Credit card",
                                        Transactions: ["PKR " + amountToDeductTotal],
                                    });
                                }
                            }
                            else {
                                console.log(chalk.red("Insufficient balance"));
                            }
                        }
                        else {
                            console.log(chalk.red("Please enter a valid amount (greater than 0)"));
                        }
                    }
                }
                if (!isUserOrBalance) {
                    console.log(chalk.red(`Make sure you added user and balance before doing a transaction`));
                }
            }
            else {
                console.log(chalk.red("Please add users first"));
            }
        }
        async function paymentWithDebit(user) {
            if (user.length !== 0) {
                let isUserOrBalance = false;
                let getName = await inquirer.prompt([
                    {
                        name: "fname",
                        message: "Enter name to get amount",
                        type: "input",
                    },
                ]);
                for (let i = 0; i < user.length; i++) {
                    if (user[i].firstName == getName.fname &&
                        user[i].hasOwnProperty("balance") === true) {
                        isUserOrBalance = true;
                        let amountToDeduct = await inquirer.prompt([
                            {
                                name: "amount",
                                message: "Enter amount you want",
                                type: "number",
                            },
                        ]);
                        if (!isNaN(amountToDeduct.amount) && amountToDeduct.amount > 0) {
                            let balance = user[i].balance;
                            let charges = 100;
                            let amountToDeductTotal = amountToDeduct.amount + charges;
                            if (amountToDeductTotal <= balance) {
                                balance -= amountToDeductTotal;
                                user[i].balance = balance;
                                console.log(chalk.yellow(`Transaction successful\nUsername: ${getName.fname}\nTransaction type: Debit card\nTransaction amount: ${amountToDeduct.amount}`));
                                let findUser = userHistory.find((elem) => elem["User name"] == user[i].firstName &&
                                    elem["Transaction type"] == "Debit card");
                                if (findUser) {
                                    findUser.Transactions.push("PKR " + amountToDeductTotal);
                                }
                                else {
                                    userHistory.push({
                                        "User name": user[i].firstName,
                                        "Transaction type": "Debit card",
                                        Transactions: ["PKR " + amountToDeductTotal],
                                    });
                                }
                            }
                            else {
                                console.log(chalk.red("Insufficient balance"));
                            }
                        }
                        else {
                            console.log(chalk.red("Please enter a valid amount (greater than 0)"));
                        }
                    }
                }
                if (!isUserOrBalance) {
                    console.log(chalk.red(`Make sure you added user and balance before doing a transaction`));
                }
            }
            else {
                console.log(chalk.red("Please add users first"));
            }
        }
        if (pickCard.card === chalk.cyan("Credit card")) {
            await paymentWithCredit(user);
        }
        else {
            await paymentWithDebit(user);
        }
    }
    async addBalance() {
        if (this.usersData.length !== 0) {
            let userArray = this.usersData;
            let getName = await inquirer.prompt([
                {
                    message: "Enter user name to add balance",
                    type: "input",
                    name: "userName",
                },
            ]);
            let runIf = false;
            for (let i = 0; i < userArray.length; i++) {
                if (userArray[i].firstName === getName.userName) {
                    runIf = true;
                    let getAmount = await inquirer.prompt([
                        {
                            message: "Enter amount you want to add",
                            type: "number",
                            name: "amount",
                        },
                    ]);
                    if (!isNaN(getAmount.amount) && getAmount.amount > 0) {
                        if (Object.keys(userArray[i]).includes("balance")) {
                            userArray[i]["balance"] += getAmount.amount;
                        }
                        else {
                            userArray[i]["balance"] = getAmount.amount;
                        }
                        console.log(chalk.yellow(`Balance added successfully for user ${getName.userName}`));
                    }
                    else {
                        console.log(chalk.red("Please enter a valid amount (greater than 0)"));
                    }
                }
            }
            if (!runIf) {
                console.log(chalk.red(`User ${getName.userName} does not exist in our database`));
            }
        }
        else {
            console.log(chalk.red("Please add users info first"));
        }
    }
    async checkTransactionHistory() {
        if (this.transactionHistory.length !== 0) {
            let nameToGetHistory = await inquirer.prompt([
                {
                    name: "name",
                    message: "Enter name to check transaction history",
                    type: "input",
                },
            ]);
            let findUser = this.transactionHistory.filter((elem) => elem["User name"] == nameToGetHistory.name);
            if (findUser.length !== 0) {
                findUser.forEach((find) => {
                    for (let key in find) {
                        console.log(chalk.yellow(`${key} : ${find[key]}`));
                    }
                });
            }
            else {
                console.log(chalk.red("User doesn't exist in transaction history"));
            }
        }
        else {
            console.log(chalk.red("Please do transactions first"));
        }
    }
    async removeUserData() {
        let user = this.usersData;
        let getName = await inquirer.prompt([
            {
                name: "fname",
                message: "Enter user first name to delete data",
                type: "input",
            },
            {
                name: "lname",
                message: "Enter user last name to delete data",
                type: "input",
            },
        ]);
        let userFound = false;
        user.forEach((elem, i) => {
            if (elem.firstName == getName.fname && elem.lastName == getName.lname) {
                userFound = true;
                user.splice(i, 1);
            }
        });
        if (userFound) {
            console.log(chalk.yellow(`User ${getName.fname} removed successfully`));
        }
        else {
            console.log(chalk.red("User didn't exist"));
        }
    }
    async main() {
        let flag = false;
        while (!flag) {
            let answer = await inquirer.prompt([
                {
                    message: chalk.green("Choose an option from below"),
                    type: "list",
                    name: "choice",
                    choices: [
                        chalk.bold("Register User"),
                        chalk.bold("View User Information"),
                        chalk.bold("Add Balance"),
                        chalk.bold("Conduct Transactions"),
                        chalk.bold("Transaction History"),
                        chalk.bold("Remove User Data"),
                        chalk.red("Quit"),
                    ],
                },
            ]);
            switch (answer.choice) {
                case chalk.bold("Register User"):
                    let userInformation = await inquirer.prompt([
                        {
                            message: chalk.cyan("Enter your first name"),
                            type: "input",
                            name: "firstName",
                        },
                        {
                            message: chalk.cyan("Enter your last name"),
                            type: "input",
                            name: "lastName",
                        },
                        {
                            message: chalk.cyan("Enter your age"),
                            type: "number",
                            name: "age",
                        },
                        {
                            message: chalk.cyan("Enter your phone number"),
                            type: "number",
                            name: "phone",
                        },
                    ]);
                    if (!isNaN(userInformation.age) &&
                        !isNaN(userInformation.phone) &&
                        userInformation.firstName !== "" &&
                        userInformation.lastName !== "") {
                        await this.addInfo(userInformation.firstName, userInformation.lastName, userInformation.age, userInformation.phone);
                    }
                    else {
                        console.log(chalk.red("Please enter valid information!"));
                    }
                    break;
                case chalk.bold("View User Information"):
                    this.showUsers();
                    break;
                case chalk.bold("Add Balance"):
                    await this.addBalance();
                    break;
                case chalk.bold("Conduct Transactions"):
                    await this.doTransactions();
                    break;
                case chalk.bold("Transaction History"):
                    await this.checkTransactionHistory();
                    break;
                case chalk.bold("Remove User Data"):
                    await this.removeUserData();
                    break;
                case chalk.red("Quit"):
                    console.log(chalk.bold("Exiting the program. Goodbye!"));
                    flag = true;
                    break;
                default:
                    break;
            }
        }
    }
}
console.log(chalk.bold("Welcome to my Bank Account"));
let myBank = new MyBank();
myBank.main();
