import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeProvider } from 'styled-components'
import { AuthBanner } from './components/AuthBanner'
import { BSBanner } from './components/BSBanner'
import { BSCardBox } from './components/BSCardsBox'
import { BSInfoBox } from './components/BSInfoBox'
import { Button } from './components/Button'
import { BSCard } from './components/BuySellCard'
import { CategoryCard } from './components/CategoryCard'
import { CardsType, CatCardContainer } from './components/CatergoryCardContainer'
import { HeaderBanner } from './components/HeaderBanner'
import { Icon } from './components/Icon'
import { Image } from './components/Image'
import { MainContainer } from './components/MainContainer'
import { Link } from './components/Link'
import { MagazineBanner } from './components/MagazineBanner'
import { Nav } from './components/Nav'
import { OfferBanner } from './components/OfferBanner'
import { SearchForm } from './components/SearchForm'
import { Select } from './components/Select'
import { Text } from './components/Text'
import { Wrapper } from './components/Wrapper'
import { GlobalStyle } from './style/GlobalStyle'
import { theme } from './style/theme'

const foo = () => {
  console.log('button clicked')
}

const catCards: CardsType[] = [
  {
    src: 'https://www.subito.it/ekhaya/motori-desktop-white.svg',
    buttonTitle: 'Cerca in Motori',
    backgroundColor: 'catCardOne',
    id: 1
  },
  {
    src: 'https://www.subito.it/ekhaya/market-desktop-white.svg',
    buttonTitle: 'Cerca in Market',
    backgroundColor: 'catCardTwo',
    id: 2
  },
  {
    src: 'https://www.subito.it/ekhaya/immobili-desktop-white.svg',
    buttonTitle: 'Cerca in Immobili',
    backgroundColor: 'catCardThree',
    id: 3
  },
  {
    src: 'https://www.subito.it/ekhaya/lavoro-desktop-white.svg',
    buttonTitle: 'Cerca in Lavoro',
    backgroundColor: 'catCardFour',
    id: 4
  }
]

const searchItems = [
  { title: 'My title', placeText: 'My Placeholder', id: 1 },
  { title: 'My title', placeText: 'My Placeholder', id: 2 },
  { title: 'My title', placeText: 'My Placeholder', id: 3 }
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <MainContainer>
          <HeaderBanner
            title={
              <Text variant="p" color="textLight">
                <b>TuttoSubito</b>: spedizione e pagamento online
              </Text>
            }
          />
          <Nav>
            <Link>Magazine</Link>
            <Link>Consigli per la vendita</Link>
            <Link>Negozi e Aziende</Link>
            <Link>Subito per le Aziende</Link>
            <Link>Aiuto</Link>
            <Link>Ricerche salvate</Link>
            <Link>Preferiti</Link>
          </Nav>
          <AuthBanner buttonText="Inserisci Annuncio" />
          <SearchForm cards={searchItems} />
          <CatCardContainer cards={catCards} />
          <BSBanner
            width="100%"
            title="Scegli TuttoSubito"
            subTitles={
              <Text color={'secondaryLight'} bold={false}>
                Il nostro servizio di <b>spedizione tracciata</b> e{' '}
                <b>pagamento sicuro</b>
              </Text>
            }
            buttonTitle="Scopri di più"
            cards={[
              {
                title: 'Compra',
                imageSrc: 'https://www.subito.it/ekhaya/pay.jpg?v=4',
                id: 1
              },
              {
                title: 'Vendi',
                imageSrc: 'https://www.subito.it/ekhaya/sell.jpg?v=4',
                id: 2
              }
            ]}
          />
          <OfferBanner
            imageSrc="https://www.subito.it/ekhaya/001_DESKTOP_inserisciannuncio.jpg"
            title="Comincia a guadagnare"
            subTitle="Dai al tuo usato una seconda occasione: vendi quello che non usi più, subito."
            buttonText="Inserisci annuncio"
            buttonIcon={'plus-square'}
            width="100%"
          />
          <MagazineBanner
            title="L'arte di donare nuova vita al tuo regalo"
            subTitle="Con il regifting è sempre festa, anche per il pianeta."
            imageSrc="https://www.subito.it/ekhaya/_next/static/media/cover_hp.83da4941.webp"
            width="100%"
          />
        </MainContainer>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
