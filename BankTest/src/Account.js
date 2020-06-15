class Account {
  'use strict'

  constructor() {
    this.balance = 0;
    this.accountHistory = [];
  }

  makeDeposit(amount, date=new Date()){
    this.balance += amount;
    date = date.toLocaleDateString() //formatting date to '15/06/2020' format
    this.accountHistory.unshift({date: date, credit: amount, balance: this.balance})
  }
};
