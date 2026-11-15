const styles = {
  root: { alignItems: 'center' },
  dot: (color: string) => ({
    width: 40,
    height: 40,
    borderRadius: '50%',
    bgcolor: color,
    flexShrink: 0,
  }),
  label: { flex: 1 },
  amounts: { textAlign: 'right' },
  value: { fontWeight: 500 },
}

export default styles
