import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState, ModalDataByType, ModalType } from './model'

const initialState: AppState = {
  modal: {
    opened: false
  },
  showNotification: false
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
    showNotification: (state, { payload }: PayloadAction<boolean>) => {
      state.showNotification = payload
    }
  }
})

export const appActions = appSlice.actions
export const appReducer = appSlice.reducer
