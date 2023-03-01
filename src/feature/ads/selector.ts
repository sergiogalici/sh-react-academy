import { createSelector } from '@reduxjs/toolkit'
import { selectAllCategories, selectCategoryById } from '../categories/selectors'
import type { RootState } from '../store'
import { selectUsersById } from '../users/selector'
import { MappedAdsType } from './model'

const selectAds = (state: RootState) => state.ads

export const selectAllAds = createSelector(selectAds, ({ allAds }) => allAds)

export const selectFavourites = createSelector(selectAds, ({ favourites }) => favourites)

export const selectFilterData = createSelector(selectAds, ({ filterData }) => filterData)

export const selectAdDetail = createSelector(selectAds, ({ adDetail }) => adDetail)

export const selectMappedAdDetail = createSelector(
  selectAdDetail,
  selectCategoryById,
  selectUsersById,
  (adDetail, categoriesMap, usersMap) => {
    if (!adDetail) return null
    return {
      ...adDetail,
      category: categoriesMap[adDetail.categoryIds[0]],
      author: usersMap[adDetail.authorId]
    }
  }
)

export const selectMappedAds = createSelector(
  [selectAllAds, selectCategoryById, selectUsersById],
  (allAds, categoriesMap, usersMap) => {
    return allAds.map(({ authorId, categoryIds, ...ad }) => {
      return {
        ...ad,
        category: categoriesMap[categoryIds[0]] ?? {},
        author: usersMap[authorId] ?? {}
      }
    })
  }
)

export const selectFavouritesLength = createSelector(
  selectFavourites,
  (favs) => favs.length
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

export const makeSelectAdsInFavourites = (id: string) =>
  createSelector(selectFavourites, (favourites) => {
    return favourites.some((fav) => fav.id === id)
  })

export const makeSelectFilteredAds = (category?: string) =>
  createSelector(selectMappedAds, (ads) => {
    return category
      ? ads.filter(
        (ad) => ad.category.title?.toLocaleLowerCase() === category.toLowerCase() // eslint-disable-line
      ) // eslint-disable-line
      : ads
  })

export const makeSelectAds = (category?: string) =>
  createSelector(
    makeSelectFilteredAds(category),
    selectFilterData,
    (ads, { filter, order }) => {
      if (filter === 'value') {
        return [...ads].sort((a, b) => {
          if (a.premium && !b.premium) return -1
          if (!a.premium && b.premium) return 1
          return order === 'ASC'
            ? a.price.value - b.price.value
            : b.price.value - a.price.value
        })
      }

      if (filter === 'created_at') {
        return [...ads].sort((a, b) => {
          if (a.premium && !b.premium) return -1
          if (!a.premium && b.premium) return 1
          return order === 'ASC'
            ? a.created_at - b.created_at
            : b.created_at - a.created_at
        })
      }

      return ads
    }
  )

export const makeSelectAd = (id: keyof MappedAdsType) =>
  createSelector(selectAllAds, (ads) => {
    return ads.find((ad) => ad.id === id)
  })

export const makeSelectMappedAd = (id: keyof MappedAdsType) =>
  createSelector(selectMappedAds, (mappedAds) => {
    return mappedAds.find((ad) => ad.id === id)
  })
