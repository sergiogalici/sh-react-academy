import { Text } from '../Text'
import { StyledNotificationCard, StyledNotificationCardProps } from './styled'

type Props = {
  text?: string
} & Partial<StyledNotificationCardProps>

export const NotificationCard = ({ text }: Props) => {
  return <StyledNotificationCard>{text && <Text>{text}</Text>}</StyledNotificationCard>
}
