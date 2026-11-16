import components from './components'
import paddings from './paddings'
import palette from './palette'

declare module '@mui/material/styles' {
  interface Theme {
    appBar: {
      height: string
    }
    paddings: {
      mainLayoutPadding: string
      cardPadding: string
    }
    shapes: {
      cardRadius: string
    }
  }
  interface ThemeOptions {
    appBar?: { height: string }
    paddings?: { mainLayoutPadding: string; cardPadding: string }
    shapes?: { cardRadius: string }
  }
}

const theme = {
  appBar: {
    height: components.appBarHeight,
  },
  paddings,
  shapes: {
    cardRadius: components.cardRadius,
  },
  palette,
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'var(--font-geist-sans), Arial, Helvetica, sans-serif',
    button: { textTransform: 'none' as const, fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 12 } },
    },
  },
}

export default theme
