describe('Printer', () => {
 'use strict'
 var printer;
 var transaction1
 var transaction2
 var accountHistory;
 var balanceRecord;

 beforeEach(() => {
   transaction1 = {
     date: '15/06/2020',
     amount: 1500,
     type: 'Deposit'
   }
   transaction2 = {
     date: '15/06/2020',
     amount: 500,
     type: 'Withdrawal'
   }
   printer = new Printer();
   accountHistory = [transaction1, transaction2]
   balanceRecord = [1500, 1000]
 });

  describe('printStatement', () => {
    it('prints statement into table', () => {
      expect(printer.printStatement(accountHistory, balanceRecord)).toBe(`date || credit || debit || balance\n15/06/2020 ||   || 500.00 || 1000.00\n15/06/2020 || 1500.00 ||   || 1500.00`)
    });
  })
})
