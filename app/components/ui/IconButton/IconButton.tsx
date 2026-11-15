'use client'

import { IconButton as MUIIconButton, IconButtonProps as MUIIconButtonProps } from '@mui/material'

export type IconButtonProps = MUIIconButtonProps

const IconButton: React.FC<IconButtonProps> = (props) => {
  return <MUIIconButton {...props} />
}

export default IconButton
