import { ReactNode, useContext } from 'react'
import { RatesKeys } from '../../api/type'
import { CurrencyContext } from '../../contexts/currency'
import { OptionsType, Select } from '../Select'
import { StyledHeaderBanner, StyledHeaderBannerProps } from './styled'

type Props = Partial<StyledHeaderBannerProps> & {
  title: ReactNode
}

export const HeaderBanner = ({ title }: Props) => {
  const { activeCurrency, setActiveCurrency } = useContext(CurrencyContext)

  const currencyOptions: OptionsType[] = [
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' },
    { value: 'USD', label: 'USD' },
    { value: 'JPY', label: 'JPY' }
  ]
  // ['EUR', 'GBP', 'USD', 'JPY']

  const updateActiveCurrency = (newCurrency: string) => {
    setActiveCurrency(newCurrency as RatesKeys)
  }

  return (
    <StyledHeaderBanner>
      {title}
      <Select
        borderRadius={1}
        options={currencyOptions}
        onChange={(value) => updateActiveCurrency(value)}
        value={activeCurrency}
      />
    </StyledHeaderBanner>
  )
}
