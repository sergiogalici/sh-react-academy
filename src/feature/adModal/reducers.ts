import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdModalState } from './model'

const initialState: AdModalState = {
  showModal: false
}

const adModalSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    showModal: (state, { payload }: PayloadAction<boolean>) => {
      state.showModal = payload
    }
  }
})

export const adModalActions = adModalSlice.actions
export const adModalReducer = adModalSlice.reducer
