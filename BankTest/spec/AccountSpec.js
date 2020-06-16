describe('Account', () => {
 'use strict'
 var account;
 var date;

 beforeEach(() => {
   account = new Account();
   date = new Date().toLocaleDateString();
 });

 it('initialises with a balance of 0', () => {
   expect(account.balance).toEqual(0);
 });

 it('initialises with empty account history', () => {
   expect(account.accountHistory).toEqual([]);
 });

 describe('formatDate', () => {
   it('formats the date into a string', () => {
     expect(account.formatDate(new Date())).toEqual(date);
   });
 });

 describe('makeDeposit', () => {
   it('increments balance by 500', () => {
     account.makeDeposit(500);
     expect(account.balance).not.toEqual(0);
     expect(account.balance).toEqual(500);
   });

   it('returns error if amount is less than 0', () => {
     expect(function() { account.makeDeposit(-10); }).toThrowError(TypeError, 'You must input a positive integer.');
   });

   it('returns error if amount is less than 0', () => {
     expect(function() { account.makeDeposit('test'); }).toThrowError(TypeError, 'You must input a positive integer.');
   });

   it('adds date, credit amount and balance to account history', () => {
     account.makeDeposit(500);
     expect(account.accountHistory).toEqual([{date: date, credit: "500.00", debit: " ", balance: "500.00"}]);
   });
 });

 describe('makeWithdrawal', () => {
   it('decrements balance by 500', () => {
     account.makeWithdrawal(500);
     expect(account.balance).not.toEqual(0);
     expect(account.balance).toEqual(-500);
   });

   it('returns error if amount is less than 0', () => {
     expect(function(){ account.makeWithdrawal(-10); }).toThrowError(TypeError, 'You must input a positive integer.');
   });

   it('returns error if amount is a string', () => {
     expect(function(){ account.makeWithdrawal('test'); }).toThrowError(TypeError, 'You must input a positive integer.');
   });

   it('adds date, debit amount and balance to account history', () => {
     account.makeWithdrawal(500);
     expect(account.accountHistory).toEqual([{date: date, credit: " ", debit: "500.00", balance: "-500.00"}]);
   });
 })

 describe('viewStatement', () => {
   it('prints statement in table', () => {
     account.makeDeposit(1500);
     account.makeWithdrawal(500);
     expect(account.viewStatement()).toBe(`date || credit || debit || balance\n${date} ||   || 500.00 || 1000.00 \n${date} || 1500.00 ||   || 1500.00 `)
   });
 })
})
