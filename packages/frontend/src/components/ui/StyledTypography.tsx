import React from 'react'
import styled from 'styled-components/macro'
import { ComposedStyleProps, composedStyleFns } from 'src/utils'
import { Typography, TypographyProps } from '@material-ui/core'

interface BaseProps {
  children?: any
  onClick?: (e: any) => void
  ref?: any
  disabled?: boolean
  pointer?: boolean
  bold?: boolean
  id?: string
  style?: any
  fullWidth?: boolean
}

type StyledTypographyProps = ComposedStyleProps & TypographyProps & BaseProps

export const StyledTypography: React.FC<StyledTypographyProps> = styled(
  Typography
)<StyledTypographyProps>`
  box-sizing: border-box;

  ${({ bold }) => bold && 'font-weight: bold;'}
  ${({ pointer }) => pointer && 'cursor: pointer;'}
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  ${composedStyleFns}
`
