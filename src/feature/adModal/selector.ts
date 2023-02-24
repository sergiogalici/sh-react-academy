import { RootState } from '../store'

export const selectAdModal = ({ showModal }: RootState) => showModal.showModal
export const selectNotificationCard = ({ showModal }: RootState) =>
  showModal.showNotification
