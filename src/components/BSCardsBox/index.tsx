import { BSCard } from '../BuySellCard'
import { StyledBSCardProps } from '../BuySellCard/styled'
import { StyledBsCardsBox } from './styled'

export type BSCardProps = Partial<StyledBSCardProps> & {
  cards: [string, string, string | number, string | number][]
}

export const BSCardBox = ({ cards }: BSCardProps) => {
  return (
    <StyledBsCardsBox>
      {cards.map((card) => {
        return (
          <BSCard width={card[2]} height={card[3]} title={card[1]} imageSrc={card[0]} />
        )
      })}
    </StyledBsCardsBox>
  )
}
