class Account {
  'use strict'

  constructor(printer=new Printer()) {
    this.balance = 0;
    this.accountHistory = [];
    this.printer = printer;
  }

  formatDate(date){
    return date.toLocaleDateString() //formatting date to 'dd/mm/yyyy' format
  }

  makeDeposit(amount, date=new Date()){
    this.inputError(amount)
    date = this.formatDate(date);
    this.accountHistory.unshift({date: date, credit: amount.toFixed(2), debit: " "})
  }

  makeWithdrawal(amount, date=new Date()){
    this.inputError(amount)
    date = this.formatDate(date);
    this.accountHistory.unshift({date: date, credit: " ", debit: amount.toFixed(2)})
  }

  viewStatement(){
    return this.printer.printStatement(this.accountHistory);
  }

  inputError(amount){
    if(amount < 0 || typeof amount !== "number"){
      throw new TypeError('You must input a positive integer.');
    }
  }
};
