import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { Input } from './components/Input'
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
      <Text variant="h1">Testo H1</Text>
      <Text variant="h2">Testo H2</Text>
      <Text variant="h3">Testo H3</Text>
      <Text variant="h4">Testo H4</Text>
      <Text variant="h5">Testo H5</Text>
      <Button variant="primary">
        <Text variant="p">Testo p</Text>
      </Button>
      <Button onClick={foo} variant="secondary">
        Testo
      </Button>
      <Button variant="transparent">Testo</Button>
      <Button backgroundColor="secondary">Testo</Button>
      <Button outlined backgroundColor="primary">
        Testo
      </Button>
      <Input placeText="My placeholder" />
    </ThemeProvider>
  )
}

export default App
