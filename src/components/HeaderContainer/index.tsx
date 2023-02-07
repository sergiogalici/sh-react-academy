import { AuthBanner } from '../AuthBanner'
import { HeaderBanner } from '../HeaderBanner'
import { Nav, NavLink, NavProps } from '../Nav'
import { Text } from '../Text'
import { StyledHeaderContainerProps } from './styled'

type Props = Partial<StyledHeaderContainerProps> & NavProps & {}

export const HeaderContainer = () => {
  const links: NavLink[] = [
    { title: 'Magazine', to: '#', id: 1 },
    { title: 'Consigli per la vendita', to: '#', id: 2 },
    { title: 'Negozi e Aziende', to: '#', id: 3 },
    { title: 'Subito per le Aziende', to: '#', id: 4 },
    { title: 'Aiuto', to: '#', id: 5 },
    { title: 'Ricerche salvate', to: '#', id: 6 },
    { title: 'Preferiti', to: '#', id: 7 }
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
