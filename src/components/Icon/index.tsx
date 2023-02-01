import {
  IconName,
  IconPrefix,
  SizeProp,
  IconProp
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { StyledIcon, StyledIconProps } from './styled'

type Props = Partial<StyledIconProps> & {
  icon: IconProp
  size: FontAwesomeIconProps['size']
}

export const Icon = ({ icon, size = '2x', color, fontSize }: Props) => {
  return <StyledIcon icon={icon} size={size} color={color} fontSize={fontSize} />
}
