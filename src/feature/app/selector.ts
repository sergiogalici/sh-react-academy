import { RootState } from '../store'

export const selectAdModal = ({ app }: RootState) => app.showModal
export const selectNotificationCard = ({ app }: RootState) => app.showNotification
