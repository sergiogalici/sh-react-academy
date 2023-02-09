import { useEffect, useState } from 'react'
import { getAds, getCategories, getUsers } from '../../api'
import { AdDto, CategoryDto, UserDto } from '../../api/type'
import { ProductCard } from '../ProductCard'
import { Text } from '../Text'
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

  console.log('ADS = ', ads)
  console.log('USERS = ', users)
  console.log('CATS = ', categories)

  const baseCategory: CategoryDto = {
    created_at: 0,
    id: '',
    updated_at: 0,
    title: "couldn't load category"
  }
  const baseUser: UserDto = {
    created_at: 0,
    updated_at: 0,
    id: '',
    rating: 0,
    email: '',
    username: "couldn't load user"
  }

  return (
    <StyledProdContainer>
      <Text color="lightGray" variant="h6">{`${ads.length} risultati`}</Text>
      <Text variant="h6">Annunci</Text>
      {ads.map((product) => {
        const currentUser: UserDto =
          users.filter((user) => user.id === product.authorId)[0] ?? baseUser
        const currentCat: CategoryDto =
          categories.filter((cat) => cat.id === product.categoryIds[0])[0] ?? baseCategory
        return (
          <ProductCard
            categoryId={product.categoryIds[0]}
            price={product.price}
            title={product.title}
            description={product.description}
            imageSrc={product.images[0]}
            key={product.id}
            rating={currentUser.rating}
            authorName={currentUser.username}
            category={currentCat.title}
          />
        )
      })}
    </StyledProdContainer>
  )
}
