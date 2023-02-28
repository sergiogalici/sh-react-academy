import { useSelector } from 'react-redux'
import { selectFavourites } from '../../feature/ads/selector'
import { AuthBanner } from '../AuthBanner'
import { Button } from '../Button'
import { HeaderBanner } from '../HeaderBanner'
import { Nav, NavLink } from '../Nav'
import { Text } from '../Text'

const links: NavLink[] = [
  { title: 'Magazine', to: '#', id: 1 },
  { title: 'Consigli per la vendita', to: '#', id: 2 },
  { title: 'Negozi e Aziende', to: '#', id: 3 },
  { title: 'Subito per le Aziende', to: '#', id: 4 },
  { title: 'Aiuto', to: '#', id: 5 },
  { title: 'Ricerche salvate', to: '#', id: 6 },
  { title: 'Preferiti', to: '/favourites', id: 7 }
]

export const HeaderContainer = () => {
  const favourites = useSelector(selectFavourites)

  return (
    <>
      <HeaderBanner
        title={
          <Text variant="p" color="textLight">
            ✨ <b>TuttoSubito</b>: spedizione e pagamento online ✨
          </Text>
        }
      />
      <Nav links={links}>
        <Button variant="primary" borderRadius={3}>
          {favourites.length.toString()}
        </Button>
      </Nav>
      <AuthBanner />
    </>
  )
}
