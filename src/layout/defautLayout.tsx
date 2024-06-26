import { Outlet } from 'react-router-dom'
import { Footer } from '../components/foote'
import { Header } from '../components/header'
import { ContainerMain, StyleMain } from './style'
export function DefaultLayout() {
  return (
    <StyleMain>
      <ContainerMain>
        <Header />
        <Outlet />

        <Footer />
      </ContainerMain>
    </StyleMain>
  )
}
