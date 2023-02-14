import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAds, getCategories, getUsers } from '../../api'
import { AdDto, CategoryDto, UserDto } from '../../api/type'
import { adsActions } from '../../feature/ads/reducer'
import { selectAllAds } from '../../feature/ads/selector'
import { categoriesActions } from '../../feature/categories/reducer'
import { getCategoryById, selectAllCategories } from '../../feature/categories/selectors'
import { usersActions } from '../../feature/users/reducer'
import { getUsersById, selectAllUsers } from '../../feature/users/selector'
import { ProductCard } from '../ProductCard'
import { Text } from '../Text'
import { StyledProdContainer } from './styled'

export const ProductsContainer = () => {
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

  const mappedAds = ads.map(({ authorId, categoryIds, ...ad }) => {
    return {
      ...ad,
      category: categoriesById[categoryIds[0]],
      author: usersById[authorId]
    }
  })

  return (
    <StyledProdContainer>
      <Text color="lightGray" variant="h6">{`${ads.length} risultati`}</Text>
      <Text variant="h6">Annunci</Text>
      {mappedAds.map((ad) => {
        return (
          <ProductCard
            authorName={ad.author.username}
            category={ad.category.title}
            rating={ad.author.rating}
            title={ad.title}
            price={ad.price}
            description={ad.description}
            imageSrc={ad.images[0]}
            key={ad.id}
          />
        )
      })}
    </StyledProdContainer>
  )
}
