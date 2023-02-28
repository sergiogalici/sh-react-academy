import { Outlet } from 'react-router-dom'
import { HeaderContainer } from '../HeaderContainer'
import { MainContainer } from '../MainContainer'
import { Wrapper } from '../Wrapper'

export const Layout = () => {
  return (
    <Wrapper>
      <MainContainer>
        <main>
          <HeaderContainer />
          <Outlet />
          <div>Footer</div>
        </main>
      </MainContainer>
    </Wrapper>
  )
}
