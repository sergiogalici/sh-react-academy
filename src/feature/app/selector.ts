import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const selectAppSlice = (state: RootState) => state.app

export const selectActiveModal = createSelector(selectAppSlice, (app) => app.modal)

export const selectNotificationCard = ({ app }: RootState) => app.showNotification
