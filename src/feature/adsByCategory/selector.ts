import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectAds = (state: RootState) => state.filteredAds

export const selectFilteredAds = createSelector(
  selectAds,
  ({ filteredAds }) => filteredAds
)
