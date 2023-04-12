import { v4 as uuidv4 } from 'uuid'
import type { NotificationType } from '../feature/app/model'

export const createFavouriteNotification = (adName: string): NotificationType => ({
  id: uuidv4(),
  title: 'Nuovo annuncio salvato!',
  message: `Hai aggiunto ${adName} ai preferiti`,
  type: 'info'
})
