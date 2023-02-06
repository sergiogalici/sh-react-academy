import { AuthBanner } from '../AuthBanner'
import { HeaderBanner } from '../HeaderBanner'
import { Nav, NavLink, NavProps } from '../Nav'
import { Text } from '../Text'
import { StyledHeaderContainerProps } from './styled'

type Props = Partial<StyledHeaderContainerProps> & NavProps & {}

export const HeaderContainer = () => {
  const links: NavLink[] = [
    { title: 'Magazine', to: '#' },
    { title: 'Consigli per la vendita', to: '' },
    { title: 'Negozi e Aziende', to: '' },
    { title: 'Subito per le Aziende', to: '' },
    { title: 'Aiuto', to: '' },
    { title: 'Ricerche salvate', to: '' },
    { title: 'Preferiti', to: '' }
  ]

  return (
    <>
      <HeaderBanner
        title={
          <Text variant="p" color="textLight">
            ✨ <b>TuttoSubito</b>: spedizione e pagamento online ✨
          </Text>
        }
      />
      <Nav links={links} />
      <AuthBanner buttonText="Inserisci Annuncio" />
    </>
  )
}
