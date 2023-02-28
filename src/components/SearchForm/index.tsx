import { createReadStream } from 'fs'
import { Button } from '../Button'
import { Input } from '../Input'
import { Text } from '../Text'
import { StyledSearchForm } from './styled'

type InputCardType = {
  title: string
  placeholder: string
  id: string | number
}

type SearchFormProps = {
  cards: InputCardType[]
}

export const SearchForm = ({ cards }: SearchFormProps) => {
  return (
    <StyledSearchForm>
      {cards.map((card, index) => {
        return (
          <div className="input-container" key={card.title + index}>
            <Text bold={true}>{card.title}</Text>
            <Input borderRadius={1} fullWidth placeholder={card.placeholder} />
          </div>
        )
      })}
      <div className="button-container">
        <Button icon={'search'} size="md" />
      </div>
    </StyledSearchForm>
  )
}
