import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CurrencyProvider } from './components/CurrencyProvider'
import { Layout } from './components/Layout'
import { ModalManager } from './components/ModalManager'
import { NotificationCard } from './components/NotificationCard'
import { categoriesActions } from './feature/categories/reducer'
import { countriesActions } from './feature/countries/reducer'
import { usersActions } from './feature/users/reducer'
import { AdDetail } from './pages/AdDetail'
import { Ads } from './pages/Ads'
import ContentNotFound from './pages/ContentNotFound'
import { Favourites } from './pages/Favourites'
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
        <ModalManager />
        <NotificationCard text="L'annuncio è stato inserito tra i Preferiti!" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="404" element={<ContentNotFound />} />
              <Route path="ads" element={<Ads />} />
              <Route path="ads/:category" element={<Ads />} />
              <Route path="ads/:category/:id" element={<AdDetail />} />
              <Route path="favourites" element={<Favourites />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CurrencyProvider>
    </ThemeProvider>
  )
}

export default App
