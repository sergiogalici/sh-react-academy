import { ReactNode } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { StyledHeaderBanner, StyledHeaderBannerProps } from './styled'

type Props = Partial<StyledHeaderBannerProps> & {
  title: ReactNode
}

export const HeaderBanner = ({ title }: Props) => {
  return <StyledHeaderBanner>{title}</StyledHeaderBanner>
}
