import { ReactNode } from 'react'
import { StyledModal } from './styled'

type Props = {
  children: ReactNode
}

export const Modal = ({ children }: Props) => {
  return <StyledModal>{children}</StyledModal>
}
