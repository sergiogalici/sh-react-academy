import { memo } from 'react'
import { Price } from '../../api/type'
import { useCurrency } from '../../hooks/useCurrency'
import { Text, Props as TextProps } from '../Text'

type FormattedTextProps = {
  price: Price
} & Omit<TextProps, 'children'>

export const FormattedPrice = memo(({ price, ...rest }: FormattedTextProps) => {
  const { format } = useCurrency()
  return <Text {...rest}>{format(price)}</Text>
})
