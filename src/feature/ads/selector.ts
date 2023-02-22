/* eslint-disable prettier/prettier */
import { createSelector } from '@reduxjs/toolkit'
import { AdDto, Price } from '../../api/type'
import { selectAllCategories, selectCategoryById } from '../categories/selectors'
import { RootState } from '../store'
import { selectUsersById } from '../users/selector'
import { AdsState, FilterDataType, MappedAdsType } from './model'

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

const makeSelectFilteredAds = (category?: string) => createSelector(selectMappedAds, (ads) => {
  return category
    ? ads.filter((ad) => ad.category.title?.toLocaleLowerCase() === category.toLowerCase())
    : ads
})

export const selectFilterData = createSelector(selectAds, ({ filterData }) => filterData)

export const makeSelectAds = (category?: string) =>
  createSelector(makeSelectFilteredAds(category), selectFilterData, (ads, { filter, order }) => {
    if (filter === 'value') {
      return [...ads].sort((a, b) => {
        if (a.premium && !b.premium) return -1
        if (!a.premium && b.premium) return 1
        return order === 'ASC' ? a.price.value - b.price.value : b.price.value - a.price.value
      })
    }

    if (filter === 'created_at') {
      return [...ads].sort((a, b) => {
        if (a.premium && !b.premium) return -1
        if (!a.premium && b.premium) return 1
        return order === 'ASC' ? a.created_at - b.created_at : b.created_at - a.created_at
      })
    }

    return ads
  })
