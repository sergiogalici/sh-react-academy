import { useSelector } from 'react-redux'
import { selectActiveNotification } from '../../feature/app/selector'
import { Notification } from '../Notification'

export const NotificationManager = () => {
  const activeNotification = useSelector(selectActiveNotification)

  if (!activeNotification) return null

  return (
    <Notification
      message={activeNotification.message}
      title={activeNotification.title}
      type={activeNotification.type}
    />
  )
}
