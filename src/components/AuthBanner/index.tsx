import React, { ReactNode } from 'react'
import { ThemeColors, TextVariants } from '../../style/theme'
import { Button } from '../Button'
import { Image } from '../Image'
import { Link } from '../Link'
import { StyledAuthBanner, StyledAuthBProps } from './styled'

type Props = Partial<StyledAuthBProps> & {
  buttonText: string
}

export const AuthBanner = ({ buttonText }: Props) => {
  return (
    <StyledAuthBanner>
      <Image
        src="https://assets.subito.it/static/logos/corporate.svg"
        alt="Logo Subito"
        width={230}
        height={36}
      />
      <div className="sign-in">
        <Link color="textDark" bold={true}>
          Accedi
        </Link>
        <Link color="textDark" bold={false}>
          Registrati
        </Link>
        <Button
          variant="secondary"
          size="md"
          icon={'plus-square'}
          className="offer-banner-button"
        >
          {buttonText}
        </Button>
      </div>
    </StyledAuthBanner>
  )
}
