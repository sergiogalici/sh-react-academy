import { ReactNode } from 'react'
import { ThemeColors, ThemeFontSizes } from '../../style/theme'
import { Text } from '../Text'
import { StyledLink, StyledLinkProps } from './styled'

type Props = Partial<StyledLinkProps> & {
  children?: ReactNode
  to?: string
  fontSize?: number
  bold?: boolean
  color?: ThemeColors
}

export const Link = ({
  children,
  to = '#',
  fontSize = 1,
  bold = false,
  color
}: Props) => {
  return (
    <StyledLink href={to}>
      <Text variant="p" size={fontSize} bold={bold} color={color}>
        {children}
      </Text>
    </StyledLink>
  )
}
