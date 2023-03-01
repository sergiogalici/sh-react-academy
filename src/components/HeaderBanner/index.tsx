import { ReactNode, useContext, memo } from 'react'
import { RatesKeys } from '../../api/type'
import { CurrencyContext } from '../../contexts/currency'
import { Select } from '../Select'
import { Text } from '../Text'
import { StyledHeaderBanner, StyledHeaderBannerProps } from './styled'

type Props = Partial<StyledHeaderBannerProps> & {
  title: ReactNode
}
const currencyOptions = [
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
  { value: 'USD', label: 'USD' },
  { value: 'JPY', label: 'JPY' }
]

const HeaderBannerCmp = ({ title }: Props) => {
  console.log('HeaderBanner')
  const { activeCurrency, setActiveCurrency } = useContext(CurrencyContext)

  const updateActiveCurrency = (newCurrency: string) => {
    setActiveCurrency(newCurrency as RatesKeys)
  }

  return (
    <StyledHeaderBanner>
      <Text variant="p" color="textLight">
        {title}
      </Text>
      <Select
        borderRadius={1}
        options={currencyOptions}
        onChange={(value) => updateActiveCurrency(value)}
        value={activeCurrency}
      />
    </StyledHeaderBanner>
  )
}

export const HeaderBanner = memo(HeaderBannerCmp)
