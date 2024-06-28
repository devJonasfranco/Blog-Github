import { CardsProjetos } from '../../components/CardsProjetos'

import { Profile } from '../../components/profile'
import { Search } from '../../components/search'

export function MainContainer() {
  return (
    <>
      <Profile />
      <Search />
      <CardsProjetos />
    </>
  )
}
