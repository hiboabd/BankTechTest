class Account {
  'use strict'

  constructor(printer=new Printer()) {
    this.balance = 0;
    this.balanceRecord = [];
    this.accountHistory = [];
    this.printer = printer;
  }

  formatDate(date){
    return date.toLocaleDateString() //formatting date to 'dd/mm/yyyy' format
  }

  makeDeposit(amount, date=new Date()){
    this.inputError(amount)
    date = this.formatDate(date);
    var transaction = new Transaction(amount, date, 'Deposit')
    this.accountHistory.push(transaction)
  }

  makeWithdrawal(amount, date=new Date()){
    this.inputError(amount)
    date = this.formatDate(date);
    var transaction = new Transaction(amount, date, 'Withdrawal')
    this.accountHistory.push(transaction)
  }

  viewStatement(){
    return this.printer.printStatement(this.accountHistory);
  }

  getBalance(){
    this.accountHistory.forEach((transaction, i) => {
      if(transaction.type === 'Deposit'){
        this.balance += transaction.amount
      }else{
        this.balance -= transaction.amount
      }
      this.balanceRecord.push(this.balance)
    });
  }

  inputError(amount){
    if(amount < 0 || typeof amount !== "number"){
      throw new TypeError('You must input a positive integer.');
    }
  }
};
