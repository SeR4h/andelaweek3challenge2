class BankAccount {
  constructor(name, accountNumber, balance, accountStatus) {
    this.balance = balance;
    this.name = name;
    this.accountNumber = accountNumber;
    this.accountStatus = accountStatus;
  }
  open(name, balance) {
    this.name = name;
    this.balance = balance;
    this.accountStatus = 'active';
    return this.accountNumber;

  }

  deposit(depositAmount, accountNumber, accountStatus) {
    if (this.accountNumber === accountNumber || this.accountStatus === accountStatus) {
      console.log('You have deposited' + depositAmount)
      var newBalance = this.balance + depositAmount
      this.balance = newBalance;
      return this.balance;
    }
    else {
      throw new Error('account doesnt exist')
    }
  }

  getBalance(accountNumber, accountStatus) {
    if (this.accountNumber === accountNumber || this.accountStatus === accountStatus) {
      return this.balance;
    }
    else {
      throw new Error('account doesnt exist or account is closed')
    }
  }

  withdraw(withdrawAmount, accountNumber, accountStatus) {
    if (this.accountNumber === accountNumber || this.accountStatus === accountStatus) {
      this.balance -= withdrawAmount;
      console.log('You have withdrawn' + withdrawAmount)
      console.log('Account balance is' + this.balance)
      return this.balance;
    }
    else {
      throw new Error('account doesnt exist or account closed')
    }
  }

  close(accountNumber) {
    if (this.accountNumber === accountNumber || this.accountStatus === 'active') {
      this.accountStatus = 'closed'
      return 'Account closed successfully';
    }
    else {
      throw new Error('account doesnt exist')
    }
  }
}
module.exports = new BankAccount('sarah', 'SB1034', 500000, 'active');
