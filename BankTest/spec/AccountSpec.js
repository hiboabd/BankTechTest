describe('Account', () => {
 'use strict'

 beforeEach(() => {
   let account = new Account();
 })

 it('initialises with a balance of 0', () => {
   expect(account.balance).toEqual(0);
 })
})
