import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { adModalActions } from '../../feature/adModal/reducers'
import { selectAdModal } from '../../feature/adModal/selector'
import { selectAllCategories } from '../../feature/categories/selectors'
import { selectAllCountries } from '../../feature/countries/selector'
import { Button } from '../Button'
import { HeaderContainer } from '../HeaderContainer'
import { Input } from '../Input'
import { MainContainer } from '../MainContainer'
import { Modal } from '../Modal'
import { Select } from '../Select'
import { Text } from '../Text'
import { Wrapper } from '../Wrapper'

type LayoutProps = {}

export const Layout = (props: LayoutProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(adModalActions.showModal(false))
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
