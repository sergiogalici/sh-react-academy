import { ReactNode } from 'react'
import { ThemeColors, ThemeFontSizes } from '../../style/theme'
import { Text } from '../Text'
import { StyledLink, StyledLinkProps } from './styled'

type Props = Partial<StyledLinkProps> & {
  children?: ReactNode
  to?: string
  fontSize?: ThemeFontSizes
  bold?: boolean
  color?: ThemeColors
}

export const Link = ({
  children,
  to = '#',
  fontSize = 'md',
  bold = false,
  color
}: Props) => {
  return (
    <StyledLink to={to}>
      <Text variant="p" size={fontSize} bold={bold} color={color}>
        {children}
      </Text>
    </StyledLink>
  )
}
