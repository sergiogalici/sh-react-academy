import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAds, getCategories, getUsers } from '../../api'
import { DetailCard } from '../../components/DetailCard'
import { StyledDetailCard } from '../../components/DetailCard/styled'
import { Text } from '../../components/Text'
import { adsActions } from '../../feature/ads/reducer'
import { selectAllAds } from '../../feature/ads/selector'
import { categoriesActions } from '../../feature/categories/reducer'
import { getCategoryById } from '../../feature/categories/selectors'
import { usersActions } from '../../feature/users/reducer'
import { getUsersById } from '../../feature/users/selector'

export const AdDetail = () => {
  const dispatch = useDispatch()
  const categoriesById = useSelector(getCategoryById)
  const usersById = useSelector(getUsersById)
  const ads = useSelector(selectAllAds)

  useEffect(() => {
    getAds()
      .then((data) => dispatch(adsActions.fetchAdsSuccess(data)))
      .catch((e) => console.log(e.message))

    getUsers()
      .then((data) => dispatch(usersActions.fetchUsersSuccess(data)))
      .catch((e) => console.log(e.message))

    getCategories()
      .then((data) => dispatch(categoriesActions.fetchCategoriesSuccess(data)))
      .catch((e) => console.log(e.message))
  }, [dispatch])

  return <DetailCard ad={ads[0]} />
}
