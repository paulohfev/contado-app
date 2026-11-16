const styles = {
  title: { fontWeight: 500, mb: 3 },
  content: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  list: { flex: 1, width: '100%', maxWidth: 420 },
  chart: (size: number) => ({ width: size, height: size, flexShrink: 0 }),
}

export default styles
