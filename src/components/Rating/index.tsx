/* eslint-disable prettier/prettier */
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ThemeFontSizes } from '../../style/theme'
import { Icon } from '../Icon'

type RatingProps = {
  rating?: number
  fontSize?: ThemeFontSizes
}

const starArray = Array.from({ length: 5 })

export const Rating = ({ rating = 4, fontSize = 'md' }: RatingProps) => {
  return (
    <div>
      {starArray.map((_, index: number) => {
        const currStar = index + 1
        let icon: IconProp =
          currStar < rating || currStar - rating < 0.5
            ? ['fas', 'star']
            : currStar > rating && currStar - rating >= 0.5 && currStar - rating < 1
            ? ['fas', 'star-half-alt']
            : ['far', 'star']
        return (
          <Icon
            key={Date.now() * Math.random()}
            fontSize={fontSize}
            color="gold"
            icon={icon}
            size="1x"
          />
        )
      })}
    </div>
  )
}
