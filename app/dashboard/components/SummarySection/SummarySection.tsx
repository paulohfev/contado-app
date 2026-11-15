'use client'

import { useState } from 'react'

import Button from '@/app/components/ui/Button/Button'
import Card from '@/app/components/ui/Card/Card'
import Divider from '@/app/components/ui/Divider/Divider'
import IconButton from '@/app/components/ui/IconButton/IconButton'
import {
  AddIcon,
  ArrowDownwardIcon,
  ArrowUpwardIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from '@/app/components/ui/icons/icons'
import Stack from '@/app/components/ui/Stack/Stack'
import { formatCurrency } from '@/app/lib/format'

import styles from './styles'
import Total from './Total/Total'

type SummarySectionProps = {
  income: number
  expenses: number
}

const SummarySection: React.FC<SummarySectionProps> = ({ income, expenses }) => {
  const [hidden, setHidden] = useState(false)
  const mask = (value: number) => (hidden ? 'R$ -----' : formatCurrency(value))

  return (
    <Card component="section" aria-label="Monthly summary" sx={styles.root}>
      <Stack direction="row" spacing={3} useFlexGap sx={styles.group}>
        <IconButton
          aria-label={hidden ? 'Show values' : 'Hide values'}
          onClick={() => setHidden((prev) => !prev)}
          sx={styles.visibilityToggle}
        >
          {hidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
        <Total
          label="Monthly income"
          value={mask(income)}
          icon={<ArrowDownwardIcon fontSize="small" color="success" />}
        />
        <Divider orientation="vertical" flexItem />
        <Total
          label="Monthly expenses"
          value={mask(expenses)}
          icon={<ArrowUpwardIcon fontSize="small" color="error" />}
        />
      </Stack>

      <Stack direction="row" spacing={1.5} useFlexGap sx={styles.group}>
        <Button variant="outlined" color="error" startIcon={<ArrowUpwardIcon />}>
          Expense
        </Button>
        <Button variant="outlined" color="success" startIcon={<ArrowDownwardIcon />}>
          Income
        </Button>
        <Button variant="contained" color="primary" aria-label="Add" sx={styles.addButton}>
          <AddIcon />
        </Button>
      </Stack>
    </Card>
  )
}

export default SummarySection
