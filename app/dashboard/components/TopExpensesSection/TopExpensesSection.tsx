'use client'

import Box from '@/app/components/ui/Box/Box'
import Card from '@/app/components/ui/Card/Card'
import DonutChart from '@/app/components/ui/DonutChart/DonutChart'
import Stack from '@/app/components/ui/Stack/Stack'
import Typography from '@/app/components/ui/Typography/Typography'
import { formatCurrency } from '@/app/lib/format'

import type { ExpenseCategory } from '../../data'
import ExpenseCategoryRow from '../ExpenseCategoryRow/ExpenseCategoryRow'
import styles from './styles'

type TopExpensesSectionProps = {
  categories: ExpenseCategory[]
}

const CHART_SIZE = 260

const TopExpensesSection: React.FC<TopExpensesSectionProps> = ({ categories }) => {
  const total = categories.reduce((sum, c) => sum + c.value, 0)

  return (
    <Card component="section" aria-label="Top expenses">
      <Typography variant="h6" sx={styles.title}>
        Top expenses
      </Typography>

      <Box sx={styles.content}>
        <Stack spacing={2.5} sx={styles.list}>
          {categories.map((c) => (
            <ExpenseCategoryRow
              key={c.id}
              label={c.label}
              value={c.value}
              percent={(c.value / total) * 100}
              color={c.color}
            />
          ))}
        </Stack>

        <Box sx={styles.chart(CHART_SIZE)}>
          <DonutChart
            data={categories}
            width={CHART_SIZE}
            height={CHART_SIZE}
            margin={0}
            aria-label={`Expenses by category, total ${formatCurrency(total)}`}
          />
        </Box>
      </Box>
    </Card>
  )
}

export default TopExpensesSection
