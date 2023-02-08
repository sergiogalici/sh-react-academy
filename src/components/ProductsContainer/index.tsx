import { ProductCard } from '../ProductCard'
import { StyledProdContainer } from './styled'

export const ProductsContainer = () => {
  return (
    <StyledProdContainer>
      {'prods'.split('').map((product) => {
        return <ProductCard key={Date.now() * Math.random()} rating={3.4} />
      })}
    </StyledProdContainer>
  )
}
