class BankAccount {
  constructor(name, accountNumber, balance, accountStatus) {
    this.balance = balance;
    this.name = name;
    this.accountNumber = accountNumber;
    this.accountStatus = accountStatus;
  }
  open(name, balance) {
    if (this.accountStatus != 'active') {
      this.name = name;
      this.balance = balance;
      this.accountStatus = 'active';
      return this.accountNumber;
    }
  }

  deposit(depositAmount, accountNumber) {
    if (this.accountNumber === accountNumber && this.accountStatus === 'active') {
      console.log('You have deposited' + depositAmount)
      var newBalance = this.balance + depositAmount
      this.balance = newBalance;
      return this.balance;
    }
    else {
      throw new Error('account doesnt exist')
    }
  }

  getBalance(accountNumber) {
    if (this.accountNumber === accountNumber && this.accountStatus === 'active') {
      return this.balance;
    }
    else {
      throw new Error('account doesnt exist or account is closed')
    }
  }

  withdraw(withdrawAmount, accountNumber) {
    if (this.accountNumber === accountNumber && this.accountStatus === 'active') {
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
    if (this.accountNumber === accountNumber && this.accountStatus === 'active') {
      this.accountStatus = 'closed'
      return 'Account closed successfully';
    }
    else {
      throw new Error('account doesnt exist')
    }
  }
}
module.exports = new BankAccount('sarah', 'SB1034', 500000, 'closed');
