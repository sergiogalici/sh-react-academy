import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdDto } from '../../api/type'
import { AdsState } from './model'

const initialState: AdsState = { allAds: [] }

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    fetchAdsSuccess: (state, { payload }: PayloadAction<AdDto[]>) => {
      state.allAds = payload
    },
    fetchAdsFailed: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
    }
  }
})

export const adsActions = {
  ...adsSlice.actions,
  fetchAdsRequested: createAction('ADS_FETCH_REQUESTED')
}
export const adsReducer = adsSlice.reducer
