import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdDto } from '../../api/type'
import { AdState } from './model'

const initialState: AdState = {
  ad: {
    authorId: '',
    categoryIds: [],
    countryId: '',
    created_at: 0,
    description: '',
    id: '',
    images: [],
    premium: true,
    price: { currency: 'EUR', value: 0 },
    title: '',
    updated_at: 0,
    hidden: false
  }
}

const adSlice = createSlice({
  name: 'ad',
  initialState,
  reducers: {
    fetchAdSuccess: (state, { payload }: PayloadAction<AdDto>) => {
      state.ad = payload
    }
  }
})

export const adActions = adSlice.actions
export const adReducer = adSlice.reducer
