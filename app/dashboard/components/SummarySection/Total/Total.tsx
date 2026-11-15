'use client'

import Box from '@/app/components/ui/Box/Box'
import Stack from '@/app/components/ui/Stack/Stack'
import Typography from '@/app/components/ui/Typography/Typography'

import styles from './styles'

type TotalProps = {
  label: string
  value: string
  icon: React.ReactNode
}

const Total: React.FC<TotalProps> = ({ label, value, icon }) => (
  <Box>
    <Stack direction="row" spacing={1} sx={styles.header}>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      {icon}
    </Stack>
    <Typography variant="h5" sx={styles.value}>
      {value}
    </Typography>
  </Box>
)

export default Total
