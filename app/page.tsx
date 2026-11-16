import Stack from '@/app/components/ui/Stack/Stack'

import SummarySection from './dashboard/components/SummarySection/SummarySection'
import TopExpensesSection from './dashboard/components/TopExpensesSection/TopExpensesSection'
import { expensesByCategory, monthlySummary } from './dashboard/data'
import styles from './dashboard/styles'

export default function DashboardPage() {
  return (
    <Stack component="main" spacing={3} sx={styles.page}>
      <SummarySection income={monthlySummary.income} expenses={monthlySummary.expenses} />
      <TopExpensesSection categories={expensesByCategory} />
    </Stack>
  )
}
