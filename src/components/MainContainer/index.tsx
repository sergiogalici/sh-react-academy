import { ReactNode } from 'react'
import { StyledLayout, StyledLayoutProps } from './styled'

type Props = Partial<StyledLayoutProps> & {
  children: ReactNode
}

export const MainContainer = ({ children }: Props) => {
  return <StyledLayout>{children}</StyledLayout>
}
