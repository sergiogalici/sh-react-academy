import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CurrencyProvider } from './components/CurrencyProvider'
import { Layout } from './components/Layout'
import { store } from './feature/store'
import { AdDetail } from './pages/AdDetail'
import { Ads } from './pages/Ads'
import { Home } from './pages/Home'
import { GlobalStyle } from './style/GlobalStyle'
import { theme } from './style/theme'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CurrencyProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="ads" element={<Ads />} />
                <Route path="ads/:id" element={<AdDetail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CurrencyProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
