import { BSCard } from '../BuySellCard'
import { StyledBSCardProps } from '../BuySellCard/styled'
import { StyledBsCardsBox } from './styled'

type CardsType = {
  title: string
  imageSrc: string
  id: number | string
}

export type BSCardProps = Partial<StyledBSCardProps> & {
  // TODO array di oggetti -- oggetto piu dichiarativo
  // cards: [string, string, string | number, string | number][]
  cards: CardsType[]
}

export const BSCardBox = ({ cards }: BSCardProps) => {
  return (
    <StyledBsCardsBox>
      {cards.map((card) => {
        return <BSCard title={card.title} imageSrc={card.imageSrc} key={card.id} />
      })}
    </StyledBsCardsBox>
  )
}
