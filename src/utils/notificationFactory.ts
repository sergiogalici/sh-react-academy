import { v4 as uuidv4 } from 'uuid'
import type { Notification } from '../feature/app/model'

export const createFavouriteNotification = (adName: string): Notification => ({
  id: uuidv4(),
  title: 'Nuovo annuncio salvato!',
  message: `Hai aggiunto ${adName} ai preferiti`,
  type: 'info'
})

// dispatch(addNotification(createFavouriteNotification('appartemanto X')))
