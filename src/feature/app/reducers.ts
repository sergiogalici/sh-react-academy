import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState, ModalDataByType, ModalType, NotificationType } from './model'

const initialState: AppState = {
  modal: {
    opened: false
  },
  notification: null,
  configuration: {
    notificationDuration: 3000
  }
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showModal: (
      state,
      { payload }: PayloadAction<{ type: ModalType; data?: ModalDataByType[ModalType] }>
    ) => {
      state.modal = {
        opened: true,
        type: payload.type,
        data: payload.data
      }
    },
    hideModal: (state) => {
      state.modal.opened = false
    },
    addNotification: (state, { payload }: PayloadAction<NotificationType>) => {
      state.notification = payload
    },
    removeNotification: (state) => {
      state.notification = null
    }
  }
})

export const appActions = appSlice.actions
export const appReducer = appSlice.reducer
