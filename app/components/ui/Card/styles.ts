import { Theme } from '@mui/material'

const styles = {
  root: (theme: Theme) => ({
    borderRadius: theme.shapes.cardRadius,
    padding: theme.paddings.cardPadding,
  }),
}

export default styles
