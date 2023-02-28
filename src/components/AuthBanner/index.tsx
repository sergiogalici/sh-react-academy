import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ModalType } from '../../feature/app/model'
import { appActions } from '../../feature/app/reducers'
import { Button } from '../Button'
import { Image } from '../Image'
import { Text } from '../Text'
import { StyledAuthBanner } from './styled'

export const AuthBanner = () => {
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
          onClick={() =>
            dispatch(
              appActions.showModal({
                type: ModalType.CREATE_AD,
                data: { productId: 'AAAAAAA' }
              })
            )
          }
        >
          {/* TODO Hardcode Inserisci Annuncio -- add notify to toggle modal open closed */}
          Inserisci annuncio
        </Button>
      </div>
    </StyledAuthBanner>
  )
}
