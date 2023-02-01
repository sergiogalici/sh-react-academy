import { ReactNode } from 'react'
import { theme } from '../../style/theme'
import { StyledSelect, StyledSelectProps } from './styled'

type Props = Partial<StyledSelectProps> & {
  options?: string[]
}

export const Select = ({
  color,
  padding = 'sm',
  borderRadius = theme.radii[0],
  fullWidth = false,
  options = ['']
}: Props) => {
  return (
    <StyledSelect
      borderRadius={borderRadius}
      color={color}
      padding={padding}
      fullWidth={fullWidth}
    >
      <optgroup>
        {options.map((opt, index) => (
          <option value={opt} key={opt + index}>
            {opt}
          </option>
        ))}
      </optgroup>
    </StyledSelect>
  )
}
