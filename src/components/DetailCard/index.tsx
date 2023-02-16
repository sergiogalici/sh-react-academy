import { useState } from 'react'
import { MappedAd } from '../../feature/adDetail/model'
import { useCurrency } from '../../hooks/useCurrency'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { Rating } from '../Rating'
import { Text } from '../Text'
import { StyledDetailCard, StyledDetailCardProps } from './styled'

type Props = {
  ad: MappedAd
} & Partial<StyledDetailCardProps>

export const DetailCard = ({ ad }: Props) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const { format } = useCurrency()

  return (
    <StyledDetailCard>
      <div className="top-section">
        <div className="slideshow-container">
          {ad.images.map((image, index) => {
            return (
              <div
                className={
                  index === selectedImage
                    ? 'selected-image image-container'
                    : 'image-container'
                }
              >
                <Image alt={ad.title + index} src={image} key={image + index} />
              </div>
            )
          })}
          <div className="button-container">
            <Button
              size="md"
              icon={['fas', 'arrow-left']}
              variant="tertiary"
              onClick={() =>
                setSelectedImage(
                  selectedImage === 0 ? ad.images.length - 1 : selectedImage - 1
                )
              }
            />
            <Button
              size="md"
              icon={['fas', 'arrow-right']}
              variant="tertiary"
              onClick={() =>
                setSelectedImage(
                  selectedImage === ad.images.length - 1 ? 0 : selectedImage + 1
                )
              }
            />
          </div>
        </div>
        <div className="details-container">
          <div className="top-details">
            <Text className="category-indicator" variant="p">
              {ad.category.title}
            </Text>
            <div className="divisor" />
            <Text size="lg" bold className="ad-title">
              {ad.title}
            </Text>
            <div className="country-indicator">
              <Icon icon={['fas', 'location-dot']} size="1x" color="lightGray" />
              <Text bold>{ad.country.name}</Text>
            </div>
            <Text size="xl" color="primary">
              {format(ad.price)}
            </Text>
          </div>
          <div className="bottom-details">
            <div className="user-avatar">{ad.author.username[0].toUpperCase()}</div>
            <div>
              <Text>{ad.author.username}</Text>
              <Rating rating={ad.author.rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="divisor" />
      <div className="description-container">
        <Text bold size="lg">
          Descrizione
        </Text>
        <Text>{ad.description}</Text>
      </div>
    </StyledDetailCard>
  )
}
