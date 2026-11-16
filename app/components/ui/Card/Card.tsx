'use client'

import Paper, { PaperProps } from '../Paper/Paper'
import styles from './styles'

export type CardProps = PaperProps

const Card: React.FC<CardProps> = ({ sx, ...props }) => {
  return <Paper elevation={0} sx={[styles.root, ...(Array.isArray(sx) ? sx : [sx])]} {...props} />
}

export default Card
