import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CurrencyProvider } from './components/CurrencyProvider'
import { Layout } from './components/Layout'
import { categoriesActions } from './feature/categories/reducer'
import { countriesActions } from './feature/countries/reducer'
import { usersActions } from './feature/users/reducer'
import { AdDetail } from './pages/AdDetail'
import { Ads } from './pages/Ads'
import { Home } from './pages/Home'
import { GlobalStyle } from './style/GlobalStyle'
import { theme } from './style/theme'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(usersActions.fetchUsersRequested())
    dispatch(categoriesActions.fetchCategoriesRequested())
    dispatch(countriesActions.fetchCountriesRequested())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CurrencyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="ads" element={<Ads />} />
              <Route path="/:category" element={<Ads />} />
              <Route path="/:category/:id" element={<AdDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CurrencyProvider>
    </ThemeProvider>
  )
}

export default App
