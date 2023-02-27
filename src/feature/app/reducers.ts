import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from './model'

const initialState: AppState = {
  showModal: false,
  showNotification: false
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showModal: (state, { payload }: PayloadAction<boolean>) => {
      state.showModal = payload
    },
    showNotification: (state, { payload }: PayloadAction<boolean>) => {
      state.showNotification = payload
    }
  }
})

export const appActions = appSlice.actions
export const appReducer = appSlice.reducer
