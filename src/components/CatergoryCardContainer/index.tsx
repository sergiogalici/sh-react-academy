import { useEffect, useState } from 'react'
import { theme, ThemeColors } from '../../style/theme'
import { CategoryCard } from '../CategoryCard'
import { CategoryCardProps } from '../CategoryCard/styled'
import { StyledCatCardContainer } from './styled'

const baseURI = process.env.REACT_APP_BASE_URL

export type CardsType = {
  src: string
  buttonTitle: string
  backgroundColor: ThemeColors
  // refactor only string
  id: string | number
}

type Category = {
  title: string
  id: string
  created_at: number
  updated_at: number
}

export const CatCardContainer = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    fetch(`${baseURI}/categories`)
      .then((response) => response.json())
      .then((json) => setCategories(json))
      .catch((e) => console.log(e, ' Error loading cards'))
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
