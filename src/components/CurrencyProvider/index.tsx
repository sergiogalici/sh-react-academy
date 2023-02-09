import { ReactNode, useCallback, useEffect, useState } from 'react'
import { getUSDRates } from '../../api'
import { CurrencyRatesDto } from '../../api/type'
import { CurrencyContext, RatesKeys } from '../../contexts/currency'

type Props = {
  children: ReactNode
}

const Provider = CurrencyContext.Provider

export const CurrencyProvider = ({ children }: Props) => {
  const [activeCurrency, setActiveCurrency] = useState<RatesKeys>('EUR')
  const [rates, setRates] = useState<CurrencyRatesDto['rates']>()

  useEffect(() => {
    getUSDRates()
      .then((data) => {
        console.log('DATA', data)
        setRates(data.rates)
      })
      .catch((e) => console.log(e.messages))
  }, [])

  const updateActiveCurrency = useCallback((currency: RatesKeys) => {
    setActiveCurrency(currency)
  }, [])

  return (
    <Provider
      value={{
        activeCurrency,
        setActiveCurrency: updateActiveCurrency,
        rates
      }}
    >
      {children}
    </Provider>
  )
}
