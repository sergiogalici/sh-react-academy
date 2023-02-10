import { createContext } from 'react'
import { CurrencyRatesDto, RatesKeys } from '../api/type'

export type CurrencyContextProps = {
  activeCurrency: RatesKeys
  setActiveCurrency: (currency: RatesKeys) => void
  rates?: CurrencyRatesDto['rates']
}

export const CurrencyContext = createContext<CurrencyContextProps>({
  activeCurrency: 'EUR',
  setActiveCurrency: () => null
})
