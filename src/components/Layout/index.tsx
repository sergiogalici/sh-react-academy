import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { appActions } from '../../feature/app/reducers'
import { HeaderContainer } from '../HeaderContainer'
import { MainContainer } from '../MainContainer'
import { Wrapper } from '../Wrapper'

type LayoutProps = {}

export const Layout = (props: LayoutProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(appActions.showModal(false))
  }, [dispatch])

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
