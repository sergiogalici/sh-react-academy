import { AuthBanner } from '../AuthBanner'
import { FavouritesBadge } from '../FavouritesBadge'
import { HeaderBanner } from '../HeaderBanner'
import { Nav, NavLink } from '../Nav'

const links: NavLink[] = [
  { title: 'Magazine', to: '#', id: 1 },
  { title: 'Consigli per la vendita', to: '#', id: 2 },
  { title: 'Negozi e Aziende', to: '#', id: 3 },
  { title: 'Subito per le Aziende', to: '#', id: 4 },
  { title: 'Aiuto', to: '#', id: 5 },
  { title: 'Ricerche salvate', to: '#', id: 6 },
  { title: 'Preferiti', to: '/favourites', id: 7, rightSlot: <FavouritesBadge /> }
]

const title = (
  <span>
    ✨ <b>TuttoSubito</b>: spedizione e pagamento online ✨
  </span>
)

export const HeaderContainer = () => {
  return (
    <>
      <HeaderBanner title={title} />
      <Nav links={links} />
      <AuthBanner />
    </>
  )
}
