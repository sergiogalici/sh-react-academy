import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { Button } from '../Button'
import { Image } from '../Image'
import { Text } from '../Text'
import { StyledOfferBanner, StyledOfferBannerProps } from './styled'

type Props = Partial<StyledOfferBannerProps> & {
  imageSrc?: string
  title?: string
  subTitle?: string
  buttonIcon?: IconProp
  buttonText?: string
}
export const OfferBanner = ({
  imageSrc,
  title,
  subTitle,
  height,
  width,
  buttonText,
  buttonIcon
}: Props) => {
  return (
    <StyledOfferBanner height={height} width={width} bgImage={imageSrc}>
      <div className="offer-banner-text">
        {title && (
          <Text variant="h2" bold>
            {title}
          </Text>
        )}
        {subTitle && (
          <Text variant="p" color="lightGray">
            {subTitle}
          </Text>
        )}
      </div>
      {(buttonText || buttonIcon) && (
        <Button
          variant="secondary"
          size="md"
          icon={buttonIcon}
          className="offer-banner-button"
        >
          {buttonText}
        </Button>
      )}
    </StyledOfferBanner>
  )
}
