import { useEffect, useState } from 'react'
import { getAds, getCategories, getUsers } from '../../api'
import { AdDto, CategoryDto, UserDto } from '../../api/type'
import { ProductCard } from '../ProductCard'
import { Text } from '../Text'
import { StyledProdContainer } from './styled'

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

  const categoriesById = categories.reduce<Record<string, CategoryDto>>((acc, cat) => {
    return { ...acc, [cat.id]: cat }
  }, {})
  const usersById = users.reduce<Record<string, UserDto>>((acc, user) => {
    return { ...acc, [user.id]: user }
  }, {})
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
