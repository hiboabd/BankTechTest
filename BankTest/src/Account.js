class Account {
  'use strict'

  constructor() {
    this.balance = 0;
  }

  makeDeposit(amount){
    this.balance += amount;
  }
};
