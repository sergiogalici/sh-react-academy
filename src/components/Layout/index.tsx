import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { adModalActions } from '../../feature/adModal/reducers'
import { selectAdModal } from '../../feature/adModal/selector'
import { Button } from '../Button'
import { HeaderContainer } from '../HeaderContainer'
import { Input } from '../Input'
import { MainContainer } from '../MainContainer'
import { Modal } from '../Modal'
import { Text } from '../Text'
import { Wrapper } from '../Wrapper'

type LayoutProps = {}

export const Layout = (props: LayoutProps) => {
  const { showModel } = useSelector(selectAdModal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(adModalActions.showModel(false))
  }, [dispatch])

  return (
    <>
      {showModel && (
        <Modal>
          <div className="card-panel">
            <Button
              size="md"
              variant="secondary"
              icon={['fas', 'xmark']}
              onClick={() => dispatch(adModalActions.showModel(false))}
            />
            <Text size="lg">Inserisci un nuovo annuncio</Text>
            <form className="input-list">
              <Input fullWidth borderRadius={1} placeText="Inserisci un titolo" />
              <Input fullWidth borderRadius={1} placeText="Inserisci una descrizione" />
              <Input fullWidth borderRadius={1} placeText="Inserisci il tuo nome" />
              <Input fullWidth borderRadius={1} placeText="Seleziona la nazione" />
              <Input fullWidth borderRadius={1} placeText="Inserisci un URL" />
              <Input fullWidth borderRadius={1} placeText="Inserisci il prezzo" />
              <Input fullWidth borderRadius={1} placeText="Seleziona la categoria" />
            </form>
            <Button
              fullWidth
              size="md"
              fontSize="lg"
              variant="primary"
              onClick={() => dispatch(adModalActions.showModel(false))}
            >
              Conferma
            </Button>
          </div>
        </Modal>
      )}
      <Wrapper>
        <MainContainer>
          <main>
            <HeaderContainer />
            <Outlet />
            <div>Footer</div>
          </main>
        </MainContainer>
      </Wrapper>
    </>
  )
}
