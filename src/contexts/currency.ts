import { createContext } from 'react'
import { CurrencyRatesDto } from '../api/type'

export type RatesKeys = 'EUR' | 'GBP' | 'USD' | 'JPY'

export type CurrencyContextProps = {
  activeCurrency: RatesKeys
  setActiveCurrency: (currency: RatesKeys) => void
  rates?: CurrencyRatesDto['rates']
}

export const CurrencyContext = createContext<CurrencyContextProps>({
  activeCurrency: 'EUR',
  setActiveCurrency: () => null
})
