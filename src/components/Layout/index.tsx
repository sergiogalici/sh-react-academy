import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderContainer } from '../HeaderContainer'
import { MainContainer } from '../MainContainer'
import { Wrapper } from '../Wrapper'

type LayoutProps = {}

export const Layout = (props: LayoutProps) => {
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
