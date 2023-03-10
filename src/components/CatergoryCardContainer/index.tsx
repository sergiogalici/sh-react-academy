import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../../api'
import { categoriesActions } from '../../feature/categories/reducer'
import { selectAllCategories } from '../../feature/categories/selectors'
import { ThemeColors } from '../../style/theme'
import { CategoryCard } from '../CategoryCard'
import { StyledCatCardContainer } from './styled'

export type CardsType = {
  src: string
  buttonTitle: string
  backgroundColor: ThemeColors
  // refactor only string
  id: string | number
}

export const CatCardContainer = () => {
  const categories = useSelector(selectAllCategories)

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
            to={`/${category.title.toLowerCase()}`}
          />
        )
      })}
    </StyledCatCardContainer>
  )
}
