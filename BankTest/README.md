## Project Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## User stories

```
As a user
So I can keep my money safe
I would like to be able to make deposits
```

```
As a user
So I can retrieve my money
I would like to be able to make withdrawals
```

```
As a user
So I can see how much money I have
I would like to be able to view a bank statement
```


## Classes and methods

Class | Methods | Instance variables
------------ | ------------- | -------------
Account | makeDeposit() | this.balance
        | makeWithdrawal() | this.date
        | viewStatement() | this.accountHistory


makeDeposit()
  * Requires date, amount
  * Will increment the balance by the amount

makeWithdrawal()
  * Requires date, amount
  * Will decrement the balance by the amount

viewStatement()
  * Will show the account history
  * Requires a record of the dates and amounts of previous deposits and withdrawals (the account history)

this.accountHistory
  * An array of objects that keeps a record of the transactions a user has made
  * Deposits are stored in a credit key
  * Withdrawals are stored in a debit key

Example based on the above acceptance criteria

  1. {date: 10-01-2012, credit: 1000.00, balance: 1000.00}
  2. {date: 13-01-2012, credit: 2000.00, balance: 3000.00}
  3. {date: 40-01-2012, debit: 500.00, balance: 2500.00}
