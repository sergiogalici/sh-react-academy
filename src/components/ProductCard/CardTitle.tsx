import { memo } from 'react'
import { Text } from '../Text'

type Props = {
  category: string
  title: string
  createdAt: number
}

const CardTitleCmp = ({ category, title, createdAt }: Props) => {
  return (
    <div className="category-title">
      <Text bold upperCase color="lightGray" variant="p">
        {category}
      </Text>
      <div>
        <Text color="primary" variant="h4" className="title-container">
          {title}
        </Text>
        <Text>{`Annuncio pubblicato il ${new Date(createdAt).toLocaleString(
          'it-IT'
        )}`}</Text>
      </div>
    </div>
  )
}

export const CardTitle = memo(CardTitleCmp)
