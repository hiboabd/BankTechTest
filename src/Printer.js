class Printer {
  constructor(){
    this.tableHeader = `date || credit || debit || balance`
  }

  printStatement(accountHistory, balanceRecord){
    var statement = this.tableHeader

    for(var i = accountHistory.length - 1; i >= 0; i--){
      statement += `\n`
      statement += `${accountHistory[i].date} || `
      if(accountHistory[i].type === 'Deposit'){
        statement += accountHistory[i].amount.toFixed(2) + ` || `
        statement += `  || `
      }else{
        statement += `  || `
        statement += accountHistory[i].amount.toFixed(2) + ` || `
      }
      statement += balanceRecord[i].toFixed(2)
    }
    return statement
  }
}
