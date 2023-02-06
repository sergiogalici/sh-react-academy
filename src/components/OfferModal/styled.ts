import styled from 'styled-components'
import { ThemeSpacings } from '../../style/theme'

export type StyledOfferModalProps = {
  padding: ThemeSpacings
}

export const StyledOfferModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
