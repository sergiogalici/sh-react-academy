import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductsContainer } from '../../components/ProductsContainer'
import { adsActions } from '../../feature/ads/reducer'
import { selectMappedFavourites } from '../../feature/ads/selector'

export const Favourites = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  const favourites = useSelector(selectMappedFavourites)

  useEffect(() => {
    dispatch(adsActions.fetchAdsRequested())
  }, [dispatch])

  return <ProductsContainer products={favourites} category={category} />
}
