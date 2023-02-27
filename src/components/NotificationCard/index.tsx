import { useSelector } from 'react-redux'
import { selectNotificationCard } from '../../feature/app/selector'
import { Text } from '../Text'
import { StyledNotificationCard, StyledNotificationCardProps } from './styled'

type Props = {
  text?: string
} & Partial<StyledNotificationCardProps>

export const NotificationCard = ({ text }: Props) => {
  const showNotification = useSelector(selectNotificationCard)

  if (!showNotification) return null

  return <StyledNotificationCard>{text && <Text>{text}</Text>}</StyledNotificationCard>
}
