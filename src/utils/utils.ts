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

