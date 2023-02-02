import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeProvider } from 'styled-components'
import { BSBanner } from './components/BSBanner'
import { BSCardBox } from './components/BSCardsBox'
import { BSInfoBox } from './components/BSInfoBox'
import { Button } from './components/Button'
import { BSCard } from './components/BuySellCard'
import { CategoryCard } from './components/CategoryCard'
import { Icon } from './components/Icon'
import { Input } from './components/Input'
import { OfferBanner } from './components/OfferBanner'
import { Select } from './components/Select'
import { GlobalStyle } from './style/GlobalStyle'
import { theme } from './style/theme'

const foo = () => {
  console.log('button clicked')
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button color="primary" backgroundColor="transparent">
        Base Button
      </Button>
      <Button variant="tertiary" outlined>
        BBBBB
      </Button>
      <Button variant="secondary">AAAA</Button>
      <Button variant="secondary">Button 1</Button>
      <Button size="sm">Button 2</Button>
      <Button size="md" icon={['fas', 'search']}>
        Button 3
      </Button>
      <Button icon="search" />
      <Icon icon="search" size="2x" />
      <Input placeText="my placeholder" />
      <Select options={['opt1', 'opt2', 'opt3']} label="Ciao" name="ciao" />
      <Select options={['opt1', 'opt2', 'opt3']} fullWidth={true} />
      <Button icon="search">asdasd</Button>
      <Icon icon="search" size="3x" />
      <FontAwesomeIcon icon={'search'} />
      <CategoryCard
        backgroundColor="primary"
        title="Motori"
        buttonTitle="Cerca in Motori"
        width={150}
        height={100}
        borderRadius={1}
        shadow={true}
      />
      <BSCard
        width={200}
        height={200}
        title="Ciao"
        buttonSize="sm"
        imageSrc="https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <BSInfoBox
        title={['My Title', true]}
        subTitles={[
          ['my subtitle ', false, 'textDark'],
          ['my other subtitle', true, 'textDark'],
          ['my third subtitle', false, 'textDark'],
          ['my fourth subtitle', true, 'textDark'],
          ['my fifth subtitle', false, 'textDark']
        ]}
        width={680}
        buttonTitle="My Button"
        padding="sm"
      />
      <BSBanner
        width={800}
        title={['My Title', true]}
        subTitles={[
          ['my subtitle with some words ', false, 'textDark'],
          ['my other subtitle with some other words', true, 'textDark']
        ]}
        buttonTitle="My Button"
        padding="sm"
        cards={[
          ['https://www.subito.it/ekhaya/pay.jpg?v=4', 'Compra', 250, 200],
          ['https://www.subito.it/ekhaya/sell.jpg?v=4', 'Vendi', 250, 200]
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
    </ThemeProvider>
  )
}

export default App
