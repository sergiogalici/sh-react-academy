import { createReadStream } from 'fs'
import { Button } from '../Button'
import { Input } from '../Input'
import { Text } from '../Text'
import { StyledSearchForm } from './styled'

type InputCardType = {
  title: string
  placeText: string
  id: string | number
}

type SearchFormProps = {
  cards: InputCardType[]
}

export const SearchForm = ({ cards }: SearchFormProps) => {
  return (
    <StyledSearchForm>
      {cards.map((card) => {
        return (
          <div className="input-container">
            <Text bold={true}>{card.title}</Text>
            <Input placeText={card.placeText} />
          </div>
        )
      })}
      <div className="button-container">
        <Button icon={'search'} />
      </div>
    </StyledSearchForm>
  )
}
