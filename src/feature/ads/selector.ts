import { createSelector } from '@reduxjs/toolkit'
import { AdDto } from '../../api/type'
import { selectAllCategories, selectCategoryById } from '../categories/selectors'
import { RootState } from '../store'
import { selectUsersById } from '../users/selector'
import { MappedAdsType } from './model'

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

export const adsByCategory = createSelector(
  selectAllCategories,
  selectMappedAds,
  (allCats, mappedAds) => {
    return allCats.reduce<Record<string, MappedAdsType[]>>((acc, cat) => {
      return {
        ...acc,
        [cat.title]: mappedAds.filter((ad) => ad.category.title === cat.title)
      }
    }, {})
  }
)
