import React, { useContext } from 'react'
import { Price } from '../api/type'
import { CurrencyContext } from '../contexts/currency'

const currencies = {
  EUR: '€',
  GBP: '£',
  USD: '$',
  JPY: '¥'
}

function formatValue({ value, currency }: Price) {
  return `${currencies[currency]}${value.toFixed(2)}`
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
    const actCurrency = rates[activeCurrency]
    return formatValue
  }

  return { format }
}
