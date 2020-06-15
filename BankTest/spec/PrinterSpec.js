describe('Printer', () => {
 'use strict'
 var printer;
 var accountHistory;

 beforeEach(() => {
   printer = new Printer();
   accountHistory = [{date: '15/06/2020', credit: "500.00", debit: " ", balance: "500.00"}, {date: '15/06/2020', credit: " ", debit: "500.00", balance: "-500.00"}]
 });

  describe('printStatement', () => {
    it('prints statement into table', () => {
      expect(printer.printStatement(accountHistory)).toMatch(`date || credit || debit || balance \n 15/06/2020 ||   || 500.00 || 1000.00 \n 15/06/2020 || 1500.00 ||   || 1500.00`)
    });
  })
})
