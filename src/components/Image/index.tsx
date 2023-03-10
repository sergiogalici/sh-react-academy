import { ThemeSpacings } from '../../style/theme'
import { StyledImage, StyledImageProps } from './styled'

type Props = StyledImageProps & {
  className?: string
  src: string
  alt: string
}

export const Image = ({
  className,
  src,
  borderRadius,
  alt,
  width,
  height,
  cover = true
}: Props) => {
  return (
    <StyledImage
      className={className}
      src={src}
      borderRadius={borderRadius}
      alt={alt}
      width={width}
      height={height}
      cover={cover}
    />
  )
}
