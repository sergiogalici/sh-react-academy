import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdDto } from '../../api/type'
import { AdsState, FilterDataType, MappedAdsType, NewAd } from './model'

export const initialState: AdsState = {
  allAds: [],
  filterData: { filter: 'created_at', order: 'ASC' },
  favourites: []
}

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    fetchAdsSuccess: (state, { payload }: PayloadAction<AdDto[]>) => {
      state.allAds = payload
    },
    fetchAdsFailed: (state, { payload }: PayloadAction<string>) => {
      state.error = payload
    },
    filterDataAction: (state, { payload }: PayloadAction<FilterDataType>) => {
      state.filterData = payload
    },
    favouritesAction: (state, { payload }: PayloadAction<MappedAdsType>) => {
      state.favourites = state.favourites.some((fav) => fav.id === payload.id)
        ? state.favourites.filter((fav) => fav.id !== payload.id)
        : [...state.favourites, payload]
    }
  }
})

export const adsActions = {
  ...adsSlice.actions,
  fetchAdsRequested: createAction('ads/fetchAdsRequested'),
  postAdRequested: createAction<NewAd>('ads/postAdRequested')
}
export const adsReducer = adsSlice.reducer
