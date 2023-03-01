import { ReactNode } from 'react'
import { Text } from '../Text'
import { StyledContent, StyledGradientContainer } from './styled'

type Props = {
  preTitle?: string
  title?: string
  rightSlot?: ReactNode
  leftSlot?: ReactNode
}

export const GradientContainer = ({ preTitle, title, rightSlot, leftSlot }: Props) => {
  return (
    <StyledGradientContainer>
      {preTitle && (
        <Text color="lightGray" variant="h4">
          {preTitle}
        </Text>
      )}
      {title && <Text variant="h2">{title}</Text>}
      <StyledContent>
        {leftSlot && <div className="left">{leftSlot}</div>}
        {rightSlot && <div className="right">{rightSlot}</div>}
      </StyledContent>
    </StyledGradientContainer>
  )
}
