import React, { ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { appActions } from '../../feature/app/reducers'
import { Button } from '../Button'
import { Image } from '../Image'
import { Text } from '../Text'
import { StyledAuthBanner, StyledAuthBProps } from './styled'

type Props = Partial<StyledAuthBProps> & {
  buttonText: string
}

export const AuthBanner = ({ buttonText }: Props) => {
  const dispatch = useDispatch()

  return (
    <StyledAuthBanner>
      <Link to="/">
        <Image
          src="https://assets.subito.it/static/logos/corporate.svg"
          alt="Logo Subito"
          width={230}
          height={36}
        />
      </Link>
      <div className="sign-in">
        <Link color="textDark" to="/">
          <Text bold>Accedi</Text>
        </Link>
        <Link color="textDark" to="/">
          <Text>Registrati</Text>
        </Link>
        <Button
          variant="secondary"
          size="md"
          icon={'plus-square'}
          className="offer-banner-button"
          onClick={() => dispatch(appActions.showModal(true))}
        >
          {/* TODO Hardcode Inserisci Annuncio -- add notify to toggle modal open closed */}
          {buttonText}
        </Button>
      </div>
    </StyledAuthBanner>
  )
}
