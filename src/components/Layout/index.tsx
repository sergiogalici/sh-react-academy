import { ReactNode } from 'react'
import { StyledLayout, StyledLayoutProps } from './styled'

type Props = Partial<StyledLayoutProps> & {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return <StyledLayout>{children}</StyledLayout>
}
