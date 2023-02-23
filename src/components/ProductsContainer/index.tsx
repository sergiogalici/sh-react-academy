import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MappedAdsType } from '../../feature/ads/model'
import { makeSelectFilteredAds } from '../../feature/ads/selector'
import { ProductCard } from '../ProductCard'
import { Text } from '../Text'
import { StyledProdContainer } from './styled'

type Props = {
  category?: string
  products: MappedAdsType[]
}

export const ProductsContainer = ({ products, category }: Props) => {
  return (
    <StyledProdContainer>
      <Text color="lightGray" variant="h6">{`${products.length} risultati`}</Text>
      <Text variant="h6">{category ? category : 'Annunci'}</Text>
      {products.map((ad) => {
        return (
          <Link
            key={ad.id}
            style={{ all: 'unset', cursor: 'pointer' }}
            to={`/ads/${ad.category.title}/${ad.id}`}
          >
            <ProductCard
              authorName={ad.author.username}
              category={ad.category.title}
              rating={ad.author.rating}
              title={ad.title}
              price={ad.price}
              created_at={ad.created_at}
              description={ad.description}
              imageSrc={ad.images[0]}
              premium={ad.premium}
              hidden={ad.hidden}
              id={ad.id}
            />
          </Link>
        )
      })}
    </StyledProdContainer>
  )
}
