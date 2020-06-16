class Printer {
  constructor(){
    this.tableHeader = `date || credit || debit || balance`
  }

  printStatement(accountHistory){
    var statement = this.tableHeader
    accountHistory.forEach((transaction) => {
      statement += `\n`
      for(const property in transaction){
        statement += `${transaction[property]} || `
      }
      statement = statement.slice(0, statement.length - 3);
    });
    return statement
  }
}
