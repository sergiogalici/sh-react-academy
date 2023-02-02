import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ThemeProvider } from 'styled-components'
import { BSInfoBox } from './components/BSInfoBox'
import { Button } from './components/Button'
import { BSCard } from './components/BuySellCard'
import { CategoryCard } from './components/CategoryCard'
import { Icon } from './components/Icon'
import { Input } from './components/Input'
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
        title="my title"
        buttonTitle="button title"
        width={300}
        height={200}
        borderRadius={1}
        shadow={true}
      />
      <BSCard
        width={500}
        height={'100%'}
        title="Ciao"
        imageSrc="https://images.pexels.com/photos/7500307/pexels-photo-7500307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <BSInfoBox
        title="My Title"
        titleVariant="h2"
        subTitle="My SubTitle"
        buttonTitle="My Button"
      />
    </ThemeProvider>
  )
}

export default App
