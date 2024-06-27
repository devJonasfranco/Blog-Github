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
  const { repositorio } = constext

  return (
    <>
      <StyleLayout>
        <StyleConteinerUl>
          {repositorio.map((repos) => {
            return (
              <li key={repos.id}>
                <NavLink to="/commite">
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
