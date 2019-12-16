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
          console.log('account opened')
        });
      });
    });

  }
  deposit(depositAmount, accountNumber) {
    //rl.question('Enter account number  : ', function (accountNumber) {
    if (this.accountNumber === accountNumber) {
      // rl.question('Amount to deposit: ', function (depositAmount) {
      this.amount = parseFloat(depositAmount);
      console.log('You have deposited' + depositAmount)
      return this.amount;
      // rl.close(); 
      //})
    }
    else {
      // rl.close();
      return 'account doesnt exist'
    }
    //});
  }
  getBalance(accountNumber) {
    //rl.question('Enter account number  : ', function (accountNumber) {
    if (this.accountNumber === accountNumber) {
      return this.amount;
      //rl.close()
    }
    else {
      return 'account doesnt exist'
      //  rl.close();
    }
  }

  withdraw(withdrawAmount, accountNumber) {
    //rl.question('Enter account number  : ', function (accountNumber) {
    if (this.accountNumber === accountNumber) {
      //rl.question('Amount to withdraw: ', function (withdrawAmount) {
      var balance = this.amount - withdrawAmount;

      console.log('You have withdrawn' + withdrawAmount)
      console.log('Account balance is' + balance)
      return balance;
      //rl.close();
      //})
    }
    else {
      return 'account doesnt exist'
      //rl.close();
    }
    //})
  }

  close(accountNumber) {
    //rl.question('Enter account number  : ', function (accountNumber) {
    if (this.accountNumber === accountNumber || this.accountStatus === 'open') {
      this.accountStatus = 'closed'
      return 'Account closed successfully';
    }
    else {
      return 'account doesnt exist'
    }
    //rl.close()
    //});
  }
}
/*
var o = new BankAccount()
console.log('Bank options: \n open account , deposit , check balance , withdraw , close account ')
rl.question('Type option: ', function (option) {
  if(option==='open account'){
o.open()
} 
 else if(option==='deposit'){
o.deposit()
}       
else if(option==='check balance'){
o.getBalance()
}
else if(option==='withdraw'){
o.withdraw()
}  
else if(option==='close account'){
o.close()
}
else{
console.log('Invalid input')
rl.close();
}
});*/
module.exports = new BankAccount('sarah', 'SB1034', '0704962749', 500000, 'open');
