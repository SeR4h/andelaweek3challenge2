var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class BankAccount {
    constructor(name, accountNumber, phoneNumber, amount, accountStatus) {
        this.amount = amount;
        this.name = name;
        this.accountNumber = accountNumber;
        this.phoneNumber = phoneNumber;
        this.accountStatus = accountStatus;
    }

    open() {
        var account = new BankAccount()
        rl.question('Enter your name  :', function (name) {
            rl.question('Enter accountNumber: ', function (accountNumber) {
                rl.question('Enter phone number: ', function (phoneNumber) {
                    account.name = name
                    account.accountNumber = accountNumber
                    account.phoneNumber = phoneNumber
                    console.log(account)
                    account.deposit(account.accountNumber, account.amount)
                });
            });
        });
        account.amount = 0
        account.accountStatus = 'open'
    }

    getBalance(accontNumber, amount) {
        var account = new BankAccount()
        rl.question('Enter account number  : ', function (accountNumber) {
            if (accountNumber = accontNumber) {
                console.log(amount)
                rl.close()
            }
            else {
                console.log('account doesnt exist')
                rl.close();
            }
        });
    }

    deposit(accontNumber, amount) {
        var account = new BankAccount()
        rl.question('Enter account number  : ', function (accountNumber) {
            if (accountNumber = accontNumber) {
                rl.question('Amount to deposit: ', function (depositAmount) {
                    var newAmount = amount + parseFloat(depositAmount);
                    console.log('New Account balance is' + newAmount)
                    rl.close();
                })
            }
            else {
                rl.close();
                console.log('account doesnt exist')
            }
        });
    }

    withdraw() {
        var account = new BankAccount()
        rl.question('Enter account number  : ', function (accountNumber) {
            if (accountNumber === account.accountNumber) {
                rl.question('Amount to withdraw: ', function (withdrawAmount) {
                    var balance = account.amount - parseFloat(withdrawAmount);

                    console.log('You have withdrawn' + withdrawAmount)
                    console.log('Account balance is' + balance)
                    rl.close();
                })
            }
            else {
                console.log('account doesnt exist')
                rl.close();
            }
        })
    }

    close() {
        var account = new BankAccount()
        rl.question('Enter account number  : ', function (accountNumber) {
            if (accountNumber === account.accountNumber) {
                if (account.accountStatus = open) {
                    account.accountStatus = 'closed'
                    console.log('Account closed successfully')
                }
            }
            else {
                console.log('account doesnt exist')
            }
            rl.close()
        });
    }
}
var o = new BankAccount()
console.log('Bank options: \n open account , deposit , check balance , withdraw , close account ')
rl.question('Type option: ', function (option) {
    if (option === 'open account') {
        o.open()
    }
    else if (option === 'deposit') {
        o.deposit()
    }
    else if (option === 'check balance') {
        o.getBalance()
    }
    else if (option === 'withdraw') {
        o.withdraw()
    }
    else if (option === 'close account') {
        o.close()
    }
    else {
        console.log('Invalid input')
        rl.close();
    }
});
