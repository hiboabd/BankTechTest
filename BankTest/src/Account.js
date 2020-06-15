class Account {
  'use strict'

  constructor() {
    this.balance = 0;
    this.accountHistory = [];
  }

  makeDeposit(amount, date=new Date()){
    this.balance += amount;
    date = date.toLocaleDateString() //formatting date to 'dd/mm/yyyy' format
    this.accountHistory.unshift({date: date, credit: amount, debit: " ", balance: this.balance})
  }

  makeWithdrawal(amount, date=new Date()){
    this.balance -= amount;
    date = date.toLocaleDateString() //formatting date to 'dd/mm/yyyy' format
    this.accountHistory.unshift({date: date, credit: " ", debit: amount, balance: this.balance})
  }
};
