import { useSelector } from 'react-redux'
import { ProductCard } from '../../components/ProductCard'
import { GradientContainer } from '../../components/ProductsContainer'
import { Stack } from '../../components/Stack'
import { selectFavourites } from '../../feature/ads/selector'

export const Favourites = () => {
  const favourites = useSelector(selectFavourites)

  return (
    <GradientContainer
      title="I tuoi preferiti"
      rightSlot={
        <Stack direction="vertical">
          {favourites.map((ad) => (
            <ProductCard
              key={ad.id}
              linkUrl={`/ads/${ad.category.title}/${ad.id}`}
              product={ad}
            />
          ))}
        </Stack>
      }
    />
  )
}
