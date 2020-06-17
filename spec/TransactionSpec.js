describe('Transaction', () => {
  'use strict'
  var amount;
  var date;
  var type;
  var transaction;

  beforeEach(() => {
    amount = 500;
    date = '15/06/2020';
    type = 'Deposit';
    transaction = new Transaction(amount, date, type);
  });

  it('has an amount property', () => {
    expect(transaction).toEqual(jasmine.objectContaining({
      amount: 500
    }));
  });

  it('has a date property', () => {
    expect(transaction).toEqual(jasmine.objectContaining({
      date: '15/06/2020'
    }));
  });

  it('has a type property', () => {
    expect(transaction).toEqual(jasmine.objectContaining({
      type: 'Deposit'
    }));
  });
});
