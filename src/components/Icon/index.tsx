import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ThemeSpacings } from '../../style/theme'
import { StyledIcon, StyledIconProps } from './styled'

type Props = Partial<StyledIconProps> & {
  iconName: IconProp
  size: ThemeSpacings
}

export const Icon = ({ iconName = 'trash', size = 'md', color }: Props) => {
  return <StyledIcon icon={iconName} iconSize={size} color={color} />
}
