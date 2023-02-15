import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAds, getCategories, getUsers } from '../../api'
import { adsActions } from '../../feature/ads/reducer'
import { selectAllAds, selectMappedAds } from '../../feature/ads/selector'
import { categoriesActions } from '../../feature/categories/reducer'
import { usersActions } from '../../feature/users/reducer'
import { ProductCard } from '../ProductCard'
import { Text } from '../Text'
import { StyledProdContainer } from './styled'

export const ProductsContainer = () => {
  const dispatch = useDispatch()
  const ads = useSelector(selectMappedAds)

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

  return (
    <StyledProdContainer>
      <Text color="lightGray" variant="h6">{`${ads.length} risultati`}</Text>
      <Text variant="h6">Annunci</Text>
      {ads.map((ad) => {
        return (
          <Link style={{ all: 'unset', cursor: 'pointer' }} to={ad.id}>
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
          </Link>
        )
      })}
    </StyledProdContainer>
  )
}
