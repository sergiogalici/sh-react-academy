import { NotificationType } from '../../feature/app/model'
import { Text } from '../Text'
import { StyledNotificationCard } from './styled'

type Props = Omit<NotificationType, 'id'>

export const Notification = ({ title, message, type }: Props) => {
  return (
    <StyledNotificationCard type={type}>
      <Text className="ad-title">{title}</Text>
      <Text>{message}</Text>
    </StyledNotificationCard>
  )
}
