import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CurrencyProvider } from './components/CurrencyProvider'
import { Layout } from './components/Layout'
import { CurrencyContext } from './contexts/currency'
import { Ads } from './pages/Ads'
import { Home } from './pages/Home'
import { GlobalStyle } from './style/GlobalStyle'
import { theme } from './style/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CurrencyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="ads" element={<Ads />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CurrencyProvider>
    </ThemeProvider>
  )
}

export default App
