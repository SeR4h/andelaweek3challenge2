var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class BankAccount {
  constructor(name, accountNumber, phoneNumber, balance, accountStatus) {
    this.balance = balance;
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
          console.log('account opened')
        });
      });
    });

  }
  deposit(depositAmount, accountNumber) {
    if (this.accountNumber === accountNumber) {
      console.log('You have deposited' + depositAmount)
      var newbalance = this.balance + depositAmount
      return newbalance;
    }
    else {
      return 'account doesnt exist'
    }
  }
  getBalance(accountNumber) {
    if (this.accountNumber === accountNumber) {
      return this.balance;
    }
    else {
      return 'account doesnt exist'
    }
  }

  withdraw(withdrawAmount, accountNumber) {
    if (this.accountNumber === accountNumber) {

      var balance = this.balance - withdrawAmount;

      console.log('You have withdrawn' + withdrawAmount)
      console.log('Account balance is' + balance)
      return balance;
    }
    else {
      return 'account doesnt exist'

    }

  }

  close(accountNumber) {
    if (this.accountNumber === accountNumber || this.accountStatus === 'open') {
      this.accountStatus = 'closed'
      return 'Account closed successfully';
    }
    else {
      return 'account doesnt exist'
    }
  }
}
module.exports = new BankAccount('sarah', 'SB1034', '0704962749', 500000, 'open');
var o = new BankAccount()
console.log('Bank options: \n open account , deposit , check balance , withdraw , close account ')
rl.question('Type option: ', function (option) {
  if (option === 'open account') {
        o.open()
  }
  else if (option === 'deposit') {
    rl.question('Enter accountNumber  :', function (accountNumber) {
      rl.question('Enter amount to deposit : ', function (depositamount) {
       o.deposit(depositamount, accountNumber)
      });
    });
    
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

