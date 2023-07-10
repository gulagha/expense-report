import { ExpenseData, GroupedExpense } from "./types";

export function groupByMonth(data: ExpenseData[]): GroupedExpense[] {
  const expenses = data.reduce<{ [key: string]: GroupedExpense }>((acc, item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.toLocaleString('default', { month: 'long' });

      const key = `${month}-${year}`;

      if (!Boolean(acc[key])) {
          acc[key] = {
              month,
              year,
              amount: 0
          };
      }

      acc[key].amount += item.amount;

      return acc;
  }, {});

  return Object.values(expenses);
}

const fakeData = [
  {
    "expenseId": "ASFAS",
    "amount": 10.50,
    "date": 1625526000000,
    "description": "Grocery shopping at the local supermarket"
  },
  {
    "expenseId": "ASFASs",
    "amount": 25.00,
    "date": 1625612400000,
    "description": "Dinner at a cozy Italian restaurant"
  },
  {
    "expenseId": "ASFAsS",
    "amount": 10.50,
    "date": 1625526000000,
    "description": "Grocery shopping at the local supermarket"
  },
  {
    "expenseId": "ASFsdAS",
    "amount": 25.00,
    "date": 1643727600000,
    "description": "Dinner at a cozy Italian restaurant"
  },
  {
    "expenseId": "ASFAS",
    "amount": 10.50,
    "date": 1625526000000,
    "description": "Grocery shopping at the local supermarket"
  },
  {
    "expenseId": "ASFASs",
    "amount": 25.00,
    "date": 1625612400000,
    "description": "Dinner at a cozy Italian restaurant"
  },
  {
    "expenseId": "ASFAsS",
    "amount": 10.50,
    "date": 1625526000000,
    "description": "Grocery shopping at the local supermarket"
  },
  {
    "expenseId": "ASFsdAS",
    "amount": 25.00,
    "date": 1643727600000,
    "description": "Dinner at a cozy Italian restaurant"
  },
  {
    "expenseId": "ASFAS",
    "amount": 10.50,
    "date": 1625526000000,
    "description": "Grocery shopping at the local supermarket"
  },
  {
    "expenseId": "ASFASs",
    "amount": 25.00,
    "date": 1625612400000,
    "description": "Dinner at a cozy Italian restaurant"
  },
  {
    "expenseId": "ASFAsS",
    "amount": 10.50,
    "date": 1625526000000,
    "description": "Grocery shopping at the local supermarket"
  },
  {
    "expenseId": "ASFsdAS",
    "amount": 25.00,
    "date": 1643727600000,
    "description": "Dinner at a cozy Italian restaurant"
  },
];

export function fetchExpenses() {
  return new Promise<ExpenseData[]>((resolve) => {
    setTimeout(() => {
      resolve(fakeData);
    }, 1000);
  });
}
