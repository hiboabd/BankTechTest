class Account {
  'use strict'

  constructor() {
    this.balance = 0;
    this.accountHistory = {};
  }

  makeDeposit(amount){
    this.balance += amount;
  }
};
