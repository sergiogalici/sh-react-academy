import { useEffect, useState } from 'react'
import { getAds, getCategories, getUsers } from '../../api'
import { AdDto, CategoryDto, UserDto } from '../../api/type'
import { ProductCard } from '../ProductCard'
import { StyledProdContainer } from './styled'

export const ProductsContainer = () => {
  const [ads, setAds] = useState<AdDto[]>([])
  const [users, setUsers] = useState<UserDto[]>([])
  const [categories, setCategories] = useState<CategoryDto[]>([])

  useEffect(() => {
    getAds()
      .then((data) => setAds(data))
      .catch((e) => console.log(e.message))
    getUsers()
      .then((data) => setUsers(data))
      .catch((e) => console.log(e.message))

    getCategories()
      .then((data) => setCategories(data))
      .catch((e) => console.log(e.message))
  }, [])

  return (
    <StyledProdContainer>
      {ads.map((product) => {
        const currentUser = users.filter((user) => user.id === product.authorId)[0]
        const currentCat = categories.filter(
          (cat) => cat.id === product.categoryIds[0]
        )[0]
        console.log('Category issssss ', currentCat)
        return (
          <ProductCard
            categoryId={product.categoryIds[0]}
            price={product.price}
            title={product.title}
            description={product.description}
            imageSrc={product.images[0]}
            key={product.id}
            rating={users && currentUser.rating}
            authorName={currentUser.username}
            category={currentCat.title}
          />
        )
      })}
    </StyledProdContainer>
  )
}
