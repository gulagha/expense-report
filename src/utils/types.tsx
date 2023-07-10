export interface ExpenseData {
  expenseId: string;
  amount: number;
  date: number;
  description: string;
}

export interface GroupedExpense {
  month: string;
  year: number;
  amount: number;
}
