// Placeholder data. Replace with real data (e.g. via TanStack Query) later.

export type ExpenseCategory = {
  id: string
  label: string
  value: number
  color: string
}

export const monthlySummary = {
  income: 12850.0,
  expenses: 10597.23,
}

export const expensesByCategory: ExpenseCategory[] = [
  { id: 'investments', label: 'Investments', value: 4159.88, color: '#5b21b6' },
  { id: 'subscriptions', label: 'Subscriptions & Services', value: 2285.47, color: '#7c3aed' },
  { id: 'taxes', label: 'Taxes & Fees', value: 1032.88, color: '#9f67f5' },
  { id: 'transport', label: 'Transport', value: 1020.0, color: '#b794f6' },
  { id: 'shopping', label: 'Shopping', value: 804.33, color: '#d4bffa' },
  { id: 'other', label: 'Other', value: 1294.67, color: '#8b7fb0' },
]
