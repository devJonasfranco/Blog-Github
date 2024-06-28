import { useContext } from 'react'
import { ContextDadosDaApi } from '../../contexts/ContextDadosDaApi'
import { StyleContainer, StylelayoutContainer } from './style'
import { useForm } from 'react-hook-form'

export function Search() {
  const context = useContext(ContextDadosDaApi)
  if (!context) {
    return <div>Loading...</div>
  }
  const { dadosUser, BuscaRepositorio } = context

  const { register, handleSubmit } = useForm()

  function handleBuscarRepositorio(dados: { repositorio: string }) {
    BuscaRepositorio(dados.repositorio)
    // reset()
  }

  return (
    <StylelayoutContainer>
      <StyleContainer>
        <div>
          <h4>Publicação</h4>
          <span>{dadosUser?.public_repos} publicações</span>
        </div>
        <form action="" onChange={handleSubmit(handleBuscarRepositorio)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('repositorio')}
          />
        </form>
      </StyleContainer>
    </StylelayoutContainer>
  )
}
