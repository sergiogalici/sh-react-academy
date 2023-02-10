import React, { useContext } from 'react'
import { Price } from '../api/type'
import { CurrencyContext } from '../contexts/currency'

/* const currencies = {
  EUR: '€',
  GBP: '£',
  USD: '$',
  JPY: '¥'
} */

function formatValue({ value, currency }: Price) {
  return new Intl.NumberFormat('in-IT', {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 2
  }).format(value)
}

export const useCurrency = () => {
  const { activeCurrency, rates } = useContext(CurrencyContext)

  const format = ({ value, currency }: Price) => {
    if (!rates) {
      return '...'
    }
    if (currency === activeCurrency) {
      return formatValue({ value, currency })
    }
    const valueToDollar = value / rates[currency]
    const dollarToActive = valueToDollar * rates[activeCurrency]
    if (activeCurrency === 'USD') {
      return formatValue({ value: valueToDollar, currency: activeCurrency })
    }
    return formatValue({ value: dollarToActive, currency: activeCurrency })
  }

  return { format }
}
