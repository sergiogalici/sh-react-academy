import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdDto } from '../../api/type'
import { AdsState } from './model'

const initialState: AdsState = { allAds: [] }

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    fetchAdsSuccess: (state, { payload }: PayloadAction<AdDto[]>) => {
      state.allAds = payload
    }
  }
})

export const adsActions = adsSlice.actions
export const adsReducer = adsSlice.reducer
