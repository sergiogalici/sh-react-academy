import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdModalState } from './model'

const initialState: AdModalState = {
  showModal: false,
  showNotification: false
}

const adModalSlice = createSlice({
  name: 'showModal',
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

export const adModalActions = adModalSlice.actions
export const adModalReducer = adModalSlice.reducer
