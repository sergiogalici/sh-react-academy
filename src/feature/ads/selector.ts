import { createSelector } from '@reduxjs/toolkit'
import { selectCategoryById } from '../categories/selectors'
import { RootState } from '../store'
import { selectUsersById } from '../users/selector'

const selectAds = (state: RootState) => state.ads

export const selectAllAds = createSelector(selectAds, ({ allAds }) => allAds)

export const selectMappedAds = createSelector(
  [selectAds, selectCategoryById, selectUsersById],
  ({ allAds }, categoriesMap, usersMap) => {
    return allAds.map(({ authorId, categoryIds, ...ad }) => {
      return {
        ...ad,
        category: categoriesMap[categoryIds[0]] ?? {},
        author: usersMap[authorId] ?? {}
      }
    })
  }
)
