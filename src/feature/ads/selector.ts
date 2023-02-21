/* eslint-disable prettier/prettier */
import { createSelector } from '@reduxjs/toolkit'
import { AdDto, Price } from '../../api/type'
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

type makeSelectType = {
  category?: string
  filter?: keyof Pick<Price, 'value'> | keyof Pick<AdDto, 'created_at'>
  order?: 'ASC' | 'DESC'
}

export const makeSelectAds = ({ category, filter, order }: makeSelectType) =>
  createSelector(selectMappedAds, (ads) => {
    const sortedAds = [...ads]

    if (filter && order) {
      if (filter === 'value') {
        sortedAds.sort((a, b) => a.price[filter] - b.price[filter])
      }

      sortedAds.sort((a, b) => a[filter as 'created_at'] - b[filter as 'created_at'])
      // return order === 'ASC' ? sortedAds : sortedAds.reverse()
      if (order === 'DESC') {
        sortedAds.reverse()
      }
    }
    /* return category
      ? sortedAds.filter(
        (ad) => ad.category.title?.toLowerCase() === category.toLowerCase()
      )
      : sortedAds */
    return category
      ? sortedAds.filter((ad) => ad.category.title?.toLocaleLowerCase() === category.toLowerCase())
      : sortedAds
  })
