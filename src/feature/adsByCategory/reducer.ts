import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdDto } from '../../api/type'
import { AdsCatState } from './model'

const initialState: AdsCatState = { filteredAds: {} }

const filteredAdsSlice = createSlice({
  name: 'filteredAds',
  initialState,
  reducers: {
    filterAdsByCategory: (state, { payload }: PayloadAction<Record<string, AdDto[]>>) => {
      state.filteredAds = payload
    }
  }
})

export const filteredAdsActions = filteredAdsSlice.actions
export const filteredAdsReducer = filteredAdsSlice.reducer
