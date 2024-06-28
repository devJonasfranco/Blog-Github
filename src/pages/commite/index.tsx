import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import code from '../../assets/code.png'
import { NavLink, useParams } from 'react-router-dom'
import {
  StyleConteiner,
  StyleDivNomePost,
  StyleDivVoltar,
  StyleHeader,
  StyleLayout,
  StyledFooter,
  StyledTexto,
} from './style'
import { useEffect, useState } from 'react'
import { api2 } from '../../lib/Axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

// import { id } from 'date-fns/locale'
export function Commites() {
  const { owner, name } = useParams()
  const [repositorio, setRepositorio] = useState(null)

  useEffect(() => {
    async function fachtRepositorio() {
      try {
        const response = await api2.get(`repos/${owner}/${name}`)
        setRepositorio(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados do repositorio', error)
      }
    }

    fachtRepositorio()
  }, [owner, name])
  if (!repositorio) return <p>Carregando...</p>
  console.log(repositorio)
  return (
    <StyleLayout>
      <StyleConteiner>
        <StyleHeader>
          <StyleDivVoltar>
            <span>
              <NavLink to="/">
                <CaretLeft size={18} />
                VOLTAR
              </NavLink>
            </span>
            <p>
              <a href={repositorio.owner.html_url} target="_brack">
                VER NO GITHUB <ArrowSquareOut size={17} />
              </a>
            </p>
          </StyleDivVoltar>
          <StyleDivNomePost>
            <h4>{repositorio.name}</h4>
            <span>
              <div>
                <GithubLogo size={24} /> <p>{repositorio.owner.login}</p>
              </div>
              <div>
                <CalendarBlank size={32} />{' '}
                <p>
                  {formatDistanceToNow(repositorio.created_at, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </p>
              </div>
              <div>
                <ChatCircle size={32} /> <p>{repositorio.open_issues_count}</p>
              </div>
            </span>
          </StyleDivNomePost>
        </StyleHeader>
        <StyledTexto>
          {repositorio.description
            ? repositorio.description
            : 'sem comentários sombre o projeto'}
        </StyledTexto>
        <StyledFooter>
          <img src={code} alt="" />
        </StyledFooter>
      </StyleConteiner>
    </StyleLayout>
  )
}
