import { ReactNode } from 'react'
import { theme } from '../../style/theme'
import { StyledButton } from './styled'

type Props = {
  children: ReactNode
  onClick: () => void
  border?: boolean
}

export const Button = ({ children, onClick, border = false }: Props) => {
  return (
    <StyledButton border={border} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
