import { memo, ReactNode } from 'react'
import { TextVariants } from '../../style/theme'

import { StyledText } from './styled'
import { StyledTextProps } from './styled'

export type Props = Partial<Omit<StyledTextProps, 'as'>> & {
  children: ReactNode
  variant?: TextVariants
  className?: string
}

const TextCmp = ({
  children,
  variant = 'p',
  color,
  bold = false,
  lineHeight = 1.2,
  size,
  upperCase,
  className
}: Props) => {
  return (
    <StyledText
      as={variant}
      color={color}
      bold={bold}
      lineHeight={lineHeight}
      size={size}
      upperCase={upperCase}
      className={className}
    >
      {children}
    </StyledText>
  )
}

export const Text = memo(TextCmp)
