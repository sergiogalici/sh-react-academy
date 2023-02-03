import { ThemeColors } from '../../style/theme'
import { CategoryCard } from '../CategoryCard'
import { CategoryCardProps } from '../CategoryCard/styled'
import { StyledCatCardContainer } from './styled'

type CardsType = {
  src: string
  buttonTitle: string
  backgroundColor: ThemeColors
  id: string | number
}

export type CatCardProps = {
  // TODO array di oggetti -- oggetto piu dichiarativo
  // cards: [string, string, string | number, string | number][]
  cards: CardsType[]
}

export const CatCardContainer = ({ cards }: CatCardProps) => {
  return (
    <StyledCatCardContainer>
      {cards.map((card) => {
        return (
          <CategoryCard
            src={card.src}
            buttonTitle={card.buttonTitle}
            backgroundColor={card.backgroundColor}
            key={card.id}
            borderRadius={2}
            width={220}
            height={156}
            padding="lg"
          />
        )
      })}
    </StyledCatCardContainer>
  )
}
