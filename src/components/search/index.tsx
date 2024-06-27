import { useContext } from 'react'
import { ContextDadosDaApi } from '../../contexts/ContextDadosDaApi'
import { StyleContainer, StylelayoutContainer } from './style'

export function Search() {
  const context = useContext(ContextDadosDaApi)
  if (!context) {
    return <div>Loading...</div>
  }
  const { dadosUser } = context
  return (
    <StylelayoutContainer>
      <StyleContainer>
        <div>
          <h4>Publicação</h4>
          <span>{dadosUser?.public_repos} publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </StyleContainer>
    </StylelayoutContainer>
  )
}
