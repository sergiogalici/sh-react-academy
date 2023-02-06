import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { MainContainer } from '../MainContainer'
import { Wrapper } from '../Wrapper'

type LayoutProps = {}

export const Layout = (props: LayoutProps) => {
  return (
    <Wrapper>
      <MainContainer>
        <main>
          <div>Header</div>
          <Outlet />
          <div>Footer</div>
        </main>
      </MainContainer>
    </Wrapper>
  )
}
