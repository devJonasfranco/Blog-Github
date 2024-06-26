import { StyleContainer, StylelayoutContainer } from './style'

export function Search() {
  return (
    <StylelayoutContainer>
      <StyleContainer>
        <div>
          <h4>Publicação</h4>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </StyleContainer>
    </StylelayoutContainer>
  )
}
