import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterDataType } from '../../feature/ads/model'
import { adsActions } from '../../feature/ads/reducer'
import { selectFilterData } from '../../feature/ads/selector'
import { StyledProductsFilter, StyledProductsFilterProps } from './styled'

export type Props = {
  className?: string
} & Partial<StyledProductsFilterProps>

export const ProductsFilter = ({ className }: Props) => {
  const { filter, order } = useSelector(selectFilterData)
  const [selectedFilter, setSelectedFilter] = useState<FilterDataType>({ filter, order })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(adsActions.filterDataAction(selectedFilter))
  }, [dispatch, selectedFilter])

  return (
    <StyledProductsFilter className={className}>
      <form className="filter-radio">
        <label>
          <input
            type="radio"
            value={'created_at'}
            checked={filter !== 'value'}
            onChange={(e) =>
              setSelectedFilter({
                ...selectedFilter,
                filter: e.target.value as keyof FilterDataType['filter']
              })
            }
          />
          Created at
        </label>
        <label>
          <input
            type="radio"
            value={'value'}
            checked={filter !== 'created_at'}
            onChange={(e) =>
              setSelectedFilter({
                ...selectedFilter,
                filter: e.target.value as keyof FilterDataType['filter']
              })
            }
          />
          Value
        </label>
      </form>
      <form className="order-radio">
        <label>
          <input
            type="radio"
            value={'ASC'}
            checked={order !== 'DESC'}
            onChange={(e) =>
              setSelectedFilter({
                ...selectedFilter,
                order: e.target.value as keyof FilterDataType['order']
              })
            }
          />
          Ascending
        </label>
        <label>
          <input
            type="radio"
            value={'DESC'}
            checked={order !== 'ASC'}
            onChange={(e) =>
              setSelectedFilter({
                ...selectedFilter,
                order: e.target.value as keyof FilterDataType['order']
              })
            }
          />
          Descending
        </label>
      </form>
    </StyledProductsFilter>
  )
}
