import styled from 'styled-components'

export const StyledGradientContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(233, 233, 233, 0.7) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`

export const StyledContent = styled.div`
  display: flex;

  .left {
    flex: 1;
  }

  .right {
    flex: 4;
  }
`
