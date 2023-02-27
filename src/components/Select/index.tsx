import { ReactNode } from 'react'
import { theme } from '../../style/theme'
import { StyledSelect, StyledSelectProps } from './styled'

type Props = Partial<StyledSelectProps> & {
  options?: OptionsType[]
  name?: string
  label?: string
  onChange?: (value: string) => void
  value: string
}

export type OptionsType = {
  value: string
  label: string
  id?: string
}

export const Select = ({
  color,
  padding = 'sm',
  borderRadius,
  fullWidth = false,
  options = [{ value: '', label: '' }],
  label,
  name,
  onChange,
  value
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
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        value={value}
      >
        <optgroup>
          {options.map((opt, index) => (
            <option value={opt.value} key={opt.value + index}>
              {opt.value}
            </option>
          ))}
        </optgroup>
      </StyledSelect>
    </>
  )
}
