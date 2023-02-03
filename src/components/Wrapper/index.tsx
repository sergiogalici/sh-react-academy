import { ReactNode } from 'react'
import { StyledWrapper, StyledWrapperProps } from './styled'

type Props = Partial<StyledWrapperProps> & {
  children: ReactNode
}

export const Wrapper = ({ children }: Props) => {
  return <StyledWrapper>{children}</StyledWrapper>
}
