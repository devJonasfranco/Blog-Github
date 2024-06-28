import { NavLink } from 'react-router-dom'
import { Paginacao } from '../paginação'
import { StyleConteinerUl, StyleLayout, StyleSection } from './style'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useContext } from 'react'
import { ContextDadosDaApi } from '../../contexts/ContextDadosDaApi'

export function CardsProjetos() {
  const constext = useContext(ContextDadosDaApi)

  if (!constext) {
    return <div>Loading...</div>
  }
  const { currentItems } = constext

  const sortedItems = currentItems.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })
  return (
    <>
      <StyleLayout>
        <StyleConteinerUl>
          {sortedItems.map((repos) => {
            return (
              <li key={repos.id}>
                <NavLink to={`/commite/${repos.owner.login}/${repos.name}`}>
                  <StyleSection>
                    <div>
                      <strong>{repos.name}</strong>
                      <p>
                        {formatDistanceToNow(repos.created_at, {
                          addSuffix: true,
                          locale: ptBR,
                        })}
                      </p>
                    </div>
                    <p>
                      {repos.description
                        ? repos.description
                        : 'Sem Comentários sobre o projeto'}
                    </p>
                  </StyleSection>
                </NavLink>
              </li>
            )
          })}
        </StyleConteinerUl>
      </StyleLayout>
      <Paginacao />
    </>
  )
}
