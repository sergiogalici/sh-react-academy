import { ReactNode } from 'react'
import { StyledProductsFilter, StyledProductsFilterProps } from './styled'

export type Props = {
  children: ReactNode
  className?: string
} & Partial<StyledProductsFilterProps>

export const ProductsFilter = ({ className, children }: Props) => {
  return <StyledProductsFilter className={className}>{children}</StyledProductsFilter>
}
