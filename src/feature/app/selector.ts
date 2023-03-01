import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const selectAppSlice = (state: RootState) => state.app

export const selectActiveModal = createSelector(selectAppSlice, (app) => app.modal)

export const selectConfiguration = createSelector(
  selectAppSlice,
  (app) => app.configuration
)

export const selectActiveNotification = createSelector(
  selectAppSlice,
  ({ notification }) => notification
)

export const selectNotificationDuration = createSelector(
  selectConfiguration,
  (config) => config.notificationDuration
)
