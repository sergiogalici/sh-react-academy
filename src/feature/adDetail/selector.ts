import { createSelector } from '@reduxjs/toolkit'
import { selectCategoryById } from '../categories/selectors'
import { selectCountryById } from '../countries/selector'
import { RootState } from '../store'
import { selectUsersById } from '../users/selector'
import { MappedAd } from './model'

const selectAd = (state: RootState) => state.ad

export const selectAdDetail = createSelector(selectAd, ({ ad }) => ad)

export const selectAdForMap = createSelector(
  selectAdDetail,
  ({ categoryIds, authorId, ...ad }) => ({
    categoryIds,
    authorId,
    ...ad
  })
)

export const selectMappedAd = createSelector(
  [selectAdForMap, selectCategoryById, selectUsersById, selectCountryById],
  (
    { categoryIds, authorId, countryId, ...ad },
    categoriesMap,
    usersMap,
    countryMap
  ): MappedAd => {
    return {
      ...ad,
      category: categoriesMap[categoryIds[0]] ?? {},
      author: usersMap[authorId] ?? {},
      country: countryMap[countryId] ?? {}
    }
  }
)
