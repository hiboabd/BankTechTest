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

 describe('makeDeposit', () => {
   it('increments balance by 500', () => {
     account.makeDeposit(500);
     expect(account.balance).not.toEqual(0);
     expect(account.balance).toEqual(500);
   });

   it('adds date, amount and balance to account history', () => {
     account.makeDeposit(500);
     expect(account.accountHistory).toEqual([{date: '15/06/2020', credit: 500, balance: 500}]);
   })
 })
})
