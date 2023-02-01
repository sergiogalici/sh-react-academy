import { IconName, IconPrefix, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { StyledIcon, StyledIconProps } from './styled'

export type IconProp = [IconPrefix, IconName]

type Props = Partial<StyledIconProps> & {
  icon: IconProp
  size: FontAwesomeIconProps['size']
}

export const Icon = ({ icon, size = '2x', color }: Props) => {
  console.log('ICON ', icon, size)
  return <StyledIcon icon={icon} size={size} color={color} />
}
