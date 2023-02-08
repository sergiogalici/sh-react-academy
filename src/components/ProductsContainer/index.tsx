import { useEffect, useState } from 'react'
import { getAds } from '../../api'
import { AdDto } from '../../api/type'
import { ProductCard } from '../ProductCard'
import { StyledProdContainer } from './styled'

export const ProductsContainer = () => {
  const [ads, setAds] = useState<AdDto[]>([])

  useEffect(() => {
    getAds()
      .then((data) => setAds(data))
      .catch((e) => console.log(e.message))
  }, [])

  return (
    <StyledProdContainer>
      {ads.map((product) => {
        return (
          <ProductCard
            price={product.price}
            title={product.title}
            description={product.description}
            imageSrc={product.images[0]}
            key={product.id}
            rating={3.4}
          />
        )
      })}
    </StyledProdContainer>
  )
}
