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
    this.balance += amount;
    date = this.formatDate(date);
    this.accountHistory.unshift({date: date, credit: amount.toFixed(2), debit: " ", balance: this.balance.toFixed(2)})
  }

  makeWithdrawal(amount, date=new Date()){
    this.balance -= amount;
    date = this.formatDate(date);
    this.accountHistory.unshift({date: date, credit: " ", debit: amount.toFixed(2), balance: this.balance.toFixed(2)})
  }

  viewStatement(){
    this.printer.printStatement(this.accountHistory);
  }
};
