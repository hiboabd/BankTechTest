describe('Account', () => {
 'use strict'
 var account;

 beforeEach(() => {
   account = new Account();
 });

 it('initialises with a balance of 0', () => {
   expect(account.balance).toEqual(0);
 });

 it('initialises with empty account history', () => {
   expect(account.accountHistory).toEqual([]);
 });

 describe('formatDate', () => {
   it('formats the date into a string', () => {
     expect(account.formatDate(new Date())).toEqual(`15/06/2020`);
   });
 });

 describe('makeDeposit', () => {
   it('increments balance by 500', () => {
     account.makeDeposit(500);
     expect(account.balance).not.toEqual(0);
     expect(account.balance).toEqual(500);
   });

   it('adds date, credit amount and balance to account history', () => {
     account.makeDeposit(500);
     expect(account.accountHistory).toEqual([{date: '15/06/2020', credit: "500.00", debit: " ", balance: "500.00"}]);
   });
 });

 describe('makeWithdrawal', () => {
   it('decrements balance by 500', () => {
     account.makeWithdrawal(500);
     expect(account.balance).not.toEqual(0);
     expect(account.balance).toEqual(-500);
   });

   it('adds date, debit amount and balance to account history', () => {
     account.makeWithdrawal(500);
     expect(account.accountHistory).toEqual([{date: '15/06/2020', credit: " ", debit: "500.00", balance: "-500.00"}]);
   });
 })

 describe('viewStatement', () => {
   it('prints statement in table', () => {
     account.makeDeposit(1500);
     account.makeWithdrawal(500);
     expect(account.viewStatement()).toMatch(`date || credit || debit || balance \n 15/06/2020 ||   || 500.00 || 1000.00 \n 15/06/2020 || 1500.00 ||   || 1500.00`)
   });
 })
})
