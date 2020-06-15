describe('Account', () => {
 'use strict'
 var account;

 beforeAll(() => {
   account = new Account();
 });

 it('initialises with a balance of 0', () => {
   expect(account.balance).toEqual(0);
 })

 describe('makeDeposit', () => {
   it('increments balance by 500', () => {
     account.makeDeposit(500);
     expect(account.balance).not.toEqual(0);
     expect(account.balance).toEqual(500);
   })
 })
})
