import React from 'react'
import { BSBanner } from '../../components/BSBanner'
import { CardsType, CatCardContainer } from '../../components/CatergoryCardContainer'
import { Icon } from '../../components/Icon'
import { MagazineBanner } from '../../components/MagazineBanner'
import { OfferBanner } from '../../components/OfferBanner'
import { ProductCard } from '../../components/ProductCard'
import { Rating } from '../../components/Rating'
import { SearchForm } from '../../components/SearchForm'
import { Text } from '../../components/Text'
import { StyledHome } from './styled'

const searchItems = [
  { title: 'My title', placeText: 'My Placeholder', id: 1 },
  { title: 'My title', placeText: 'My Placeholder', id: 2 },
  { title: 'My title', placeText: 'My Placeholder', id: 3 }
]

const bsBannerCards = [
  {
    title: 'Compra',
    imageSrc: 'https://www.subito.it/ekhaya/pay.jpg?v=4',
    id: 1,
    to: '/ads'
  },
  {
    title: 'Vendi',
    imageSrc: 'https://www.subito.it/ekhaya/sell.jpg?v=4',
    id: 2,
    to: ''
  }
]

export const Home = () => {
  return (
    <StyledHome>
      <SearchForm cards={searchItems} />
      <Text variant="h2" bold color="lightGray">
        Esplora le nostre sezioni
      </Text>
      <CatCardContainer />
      <BSBanner
        width="100%"
        title="Scegli TuttoSubito"
        subTitles={
          <Text color={'secondaryLight'} bold={false}>
            Il nostro servizio di <b>spedizione tracciata</b> e <b>pagamento sicuro</b>
          </Text>
        }
        buttonTitle="Scopri di più"
        cards={bsBannerCards}
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
    </StyledHome>
  )
}
