import React, { useContext } from 'react'
import { Price } from '../api/type'
import { CurrencyContext } from '../contexts/currency'

const currencies = {
  EUR: '€',
  GBP: '£',
  USD: '$',
  JPY: '¥'
}

export const useCurrency = () => {
  const { activeCurrency, rates } = useContext(CurrencyContext)

  const format = ({ value, currency }: Price) => {}

  return format
}
