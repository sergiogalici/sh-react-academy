import { ThemeProvider } from 'styled-components'
import { Text } from './components/Text'
import { GlobalStyle } from './style/GlobalStyle'
import { theme } from './style/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Text variant="h1">Testo H1</Text>
      <Text variant="h2">Testo H2</Text>
      <Text variant="h3">Testo H3</Text>
      <Text variant="h4">Testo H4</Text>
      <Text variant="h5">Testo H5</Text>
    </ThemeProvider>
  )
}

export default App
