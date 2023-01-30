import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
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
      <Button variant="noBorder">My Text</Button>
      <Button variant="primary">My Text</Button>
      <Button variant="secondary">My Text</Button>
      <Button variant="tertiary">My Text</Button>
    </ThemeProvider>
  )
}

export default App
