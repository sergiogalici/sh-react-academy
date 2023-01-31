import { ReactNode } from 'react'
import { theme } from '../../style/theme'
import { StyledSelect, StyledSelectProps } from './styled'

type Props = Partial<StyledSelectProps> & {
  children?: ReactNode
  name?: string
  label?: string
}

export const Select = ({
  children,
  padding = 'sm',
  color,
  borderRadius = theme.radii[0],
  label,
  name,
  fullWidth = false
}: Props) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <StyledSelect
        borderRadius={borderRadius}
        color={color}
        padding={padding}
        fullWidth={fullWidth}
      >
        {children && <option>Todo: generate options</option>}
      </StyledSelect>
    </>
  )
}
