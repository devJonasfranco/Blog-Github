import { Route, Routes } from 'react-router-dom'

import { MainContainer } from './pages/main'
import { Commites } from './pages/commite'
import { DefaultLayout } from './layout/defautLayout'

export function Rounter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<MainContainer />} />
        <Route path="/commite/:owner/:name" element={<Commites />} />
      </Route>
    </Routes>
  )
}
