import { CardsProjetos } from '../../components/CardsProjetos'
import { Footer } from '../../components/foote'

import { Profile } from '../../components/profile'
import { Search } from '../../components/search'
import { ContainerMain, StyleMain } from './style'
export function MainContainer() {
  return (
    <StyleMain>
      <ContainerMain>
        <Profile />
        <Search />
        <CardsProjetos />
        {/* <Footer /> */}
      </ContainerMain>
    </StyleMain>
  )
}
