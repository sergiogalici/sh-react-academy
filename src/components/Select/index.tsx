import { ReactNode } from 'react'
import { theme } from '../../style/theme'
import { StyledSelect, StyledSelectProps } from './styled'

type Props = Partial<StyledSelectProps> & {
  options?: string[]
  name?: string
  label?: string
}

export const Select = ({
  color,
  padding = 'sm',
  borderRadius,
  fullWidth = false,
  options = [''],
  label,
  name
}: Props) => {
  return (
    <>
      {label && name && <label htmlFor={name}>{label}</label>}
      <StyledSelect
        borderRadius={borderRadius}
        color={color}
        padding={padding}
        fullWidth={fullWidth}
        name={name}
      >
        <optgroup>
          {options.map((opt, index) => (
            <option value={opt} key={opt + index}>
              {opt}
            </option>
          ))}
        </optgroup>
      </StyledSelect>
    </>
  )
}
