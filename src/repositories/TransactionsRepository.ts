import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const Balance: Balance = this.transactions.reduce((acumulador, atual) => {
      if (!acumulador[atual.type]) {
        acumulador[atual.type] = 0;
      }

      acumulador[atual.type] += atual.value;
      return acumulador;
    }, {});

    Balance.total = Object.values(Balance).reduce(
      (acumulador, atual) => acumulador - atual,
    );

    return Balance;
  }

  public create({ title, value, type }: CreateTransaction): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
