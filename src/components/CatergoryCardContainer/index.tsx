import { useEffect, useState } from 'react'
import { getCategories } from '../../api'
import { CategoryDto } from '../../api/type'
import { theme, ThemeColors } from '../../style/theme'
import { CategoryCard } from '../CategoryCard'
import { CategoryCardProps } from '../CategoryCard/styled'
import { StyledCatCardContainer } from './styled'

export type CardsType = {
  src: string
  buttonTitle: string
  backgroundColor: ThemeColors
  // refactor only string
  id: string | number
}

export const CatCardContainer = () => {
  const [categories, setCategories] = useState<CategoryDto[]>([])

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data))
      .catch((e) => console.log(e.message))
  }, [])

  return (
    <StyledCatCardContainer>
      {categories.map((category) => {
        return (
          <CategoryCard
            key={category.id}
            src={`https://www.subito.it/ekhaya/${category.title.toLowerCase()}-desktop-white.svg`}
            buttonTitle={`Compra in ${category.title}`}
            backgroundColor={category.title.toLowerCase() as ThemeColors}
            borderRadius={1}
            width={220}
            height={156}
            padding="md"
          />
        )
      })}
    </StyledCatCardContainer>
  )
}
