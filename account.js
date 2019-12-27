class BankAccount {
  constructor(name, accountNumber, balance, accountStatus) {
    this.balance = balance;
    this.name = name;
    this.accountNumber = accountNumber;
    this.accountStatus = accountStatus;
  }
  isActive() {
    return this.accountStatus === 'active';
  }
  open(name, balance) {
    if (!this.isActive()) {
      this.name = name;
      this.balance = balance;
      this.accountStatus = 'active';
      return this.accountNumber;
    }
  }

  deposit(depositAmount, accountNumber) {
    if (this.accountNumber === accountNumber && this.isActive()) {
      console.log('You have deposited' + depositAmount)
      this.balance += depositAmount
      return this.balance;
    }
    else {
      throw new Error('account doesnt exist')
    }
  }

  getBalance(accountNumber) {
    if (this.accountNumber === accountNumber && this.isActive()) {
      return this.balance;
    }
    else {
      throw new Error('account doesnt exist or account is closed')
    }
  }

  withdraw(withdrawAmount, accountNumber) {
    if (this.accountNumber === accountNumber && this.isActive()) {
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
    if (this.accountNumber === accountNumber && this.isActive()) {
      this.accountStatus = 'closed'
      return 'Account closed successfully';
    }
    else {
      throw new Error('account doesnt exist')
    }
  }
}
module.exports = new BankAccount('sarah', 'SB1034', 500000, 'closed');
