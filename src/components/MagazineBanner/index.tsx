import { ReactNode } from 'react'
import { Image } from '../Image'
import { Text } from '../Text'
import { StyledMagazineBanner, StyledMagazineBannerProps } from './styled'

type Props = Partial<StyledMagazineBannerProps> & {
  imageSrc: string
  title: string
  subTitle?: string
  height?: string | number
  width?: string | number
}
export const MagazineBanner = ({ imageSrc, title, subTitle, height, width }: Props) => {
  return (
    <StyledMagazineBanner height={height} width={width}>
      <Image
        src={imageSrc}
        alt="banner image"
        className="magazine-banner-image"
        borderRadius={1}
      />
      <div className="magazine-banner-text">
        <Text upperCase variant="h6" color="primary">
          Subito
        </Text>
        <Text variant="h2" bold>
          {title}
        </Text>
        <Text variant="p" color="lightGray">
          {subTitle}
        </Text>
      </div>
    </StyledMagazineBanner>
  )
}
