import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { Text } from './components/Text'
import { GlobalStyle } from './style/GlobalStyle'
import { theme } from './style/theme'

const foo = () => {
  console.log('button clicked')
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button variant="tertiary" outlined>
        BBBBB
      </Button>
      <Button variant="secondary">AAAA</Button>
      <Button variant="secondary">Button 1</Button>
      <Button variant="primary" outlined>
        Button 3
      </Button>
      <Button size="md">Button 2</Button>
      <Button size="lg">Button 3</Button>
      <Button icon="plus">Button 3</Button>
      <Button icon="plus" />
      <Select label="Ciao" name="ciao" />
      <Input placeText="my placeholder" />
      <Select fullWidth={true} />
    </ThemeProvider>
  )
}

export default App
