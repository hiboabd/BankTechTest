class Account {
  'use strict'

  constructor() {
    this.balance = 0;
    this.accountHistory = [];
  }

  makeDeposit(amount, date=new Date()){
    this.balance += amount;
    date = date.toLocaleDateString() //formatting date to 'dd/mm/yyyy' format
    this.accountHistory.unshift({date: date, credit: amount.toFixed(2), debit: " ", balance: this.balance.toFixed(2)})
  }

  makeWithdrawal(amount, date=new Date()){
    this.balance -= amount;
    date = date.toLocaleDateString() //formatting date to 'dd/mm/yyyy' format
    this.accountHistory.unshift({date: date, credit: " ", debit: amount.toFixed(2), balance: this.balance.toFixed(2)})
  }

  viewStatement(){
    var statement = `date || credit || debit || balance`
    this.accountHistory.forEach((object, i) => {
      statement += `\n`
      for(const property in object){
        statement += `${object[property]} || `
      }
      statement = statement.slice(0, statement.length - 3);
    });
    return statement
  }
};
