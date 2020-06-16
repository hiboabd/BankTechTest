class Account {
  'use strict'

  constructor() {
    this.balance = 0;
    this.accountHistory = [];
    this.printer = new Printer();
  }

  formatDate(date){
    return date.toLocaleDateString() //formatting date to 'dd/mm/yyyy' format
  }

  makeDeposit(amount, date=new Date()){
    if(amount < 0){ return this.inputError() }
    this.balance += amount;
    date = this.formatDate(date);
    this.accountHistory.unshift({date: date, credit: amount.toFixed(2), debit: " ", balance: this.balance.toFixed(2)})
  }

  makeWithdrawal(amount, date=new Date()){
    if(amount < 0){ return this.inputError() }
    this.balance -= amount;
    date = this.formatDate(date);
    this.accountHistory.unshift({date: date, credit: " ", debit: amount.toFixed(2), balance: this.balance.toFixed(2)})
  }

  viewStatement(){
    return this.printer.printStatement(this.accountHistory);
  }

  inputError(){
    throw new TypeError('You must input a positive integer.');
  }
};
