'use client'

import Box from '@/app/components/ui/Box/Box'
import Stack from '@/app/components/ui/Stack/Stack'
import Typography from '@/app/components/ui/Typography/Typography'
import { formatCurrency, formatPercent } from '@/app/lib/format'

import styles from './styles'

type ExpenseCategoryRowProps = {
  label: string
  value: number
  percent: number
  color: string
}

const ExpenseCategoryRow: React.FC<ExpenseCategoryRowProps> = ({ label, value, percent, color }) => (
  <Stack direction="row" spacing={2} sx={styles.root}>
    <Box aria-hidden sx={styles.dot(color)} />
    <Typography sx={styles.label} noWrap>
      {label}
    </Typography>
    <Box sx={styles.amounts}>
      <Typography variant="body2" sx={styles.value}>
        {formatCurrency(value)}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {formatPercent(percent)}
      </Typography>
    </Box>
  </Stack>
)

export default ExpenseCategoryRow
