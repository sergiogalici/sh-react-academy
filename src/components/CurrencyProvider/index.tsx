import { ReactNode, useContext } from 'react'
import { CurrencyContext } from '../../contexts/currency'

type Props = {
  children: ReactNode
}

export const CurrencyProvider = ({ children }: Props) => {
  const currencyContext = useContext(CurrencyContext)

  return (
    <CurrencyContext.Provider value={currencyContext}>
      {children}
    </CurrencyContext.Provider>
  )
}
