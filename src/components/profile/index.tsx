import {
  ArrowSquareOut,
  Building,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { StyleDivContainer, StyleDivProfile, StyleInforProfile } from './style'
import { useContext } from 'react'
import { ContextDadosDaApi } from '../../contexts/ContextDadosDaApi'

export function Profile() {
  const context = useContext(ContextDadosDaApi)
  if (!context) {
    return <div>Loading...</div>
  }
  const { dadosUser } = context

  return (
    <StyleDivContainer>
      <StyleDivProfile>
        <img src={dadosUser?.avatar_url} alt="" />
        <StyleInforProfile>
          <strong>
            {dadosUser?.login}{' '}
            <a href={dadosUser?.html_url} target="_brack">
              GITHUB <ArrowSquareOut size={17} />
            </a>
          </strong>
          <p>{dadosUser?.bio}</p>
          <span>
            <a href={dadosUser?.html_url} target="_brack">
              <GithubLogo size={24} /> {dadosUser?.login}
            </a>
            <a href="" target="_brack">
              <Building size={24} />{' '}
              {dadosUser?.company
                ? dadosUser.company
                : 'Trabalho não informado'}
            </a>
            <a href="" target="_brack">
              <Users size={24} /> {dadosUser?.followers} seguidores
            </a>
          </span>
        </StyleInforProfile>
      </StyleDivProfile>
    </StyleDivContainer>
  )
}
