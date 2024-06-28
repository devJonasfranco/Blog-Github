import { At, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { StyleLayout, StyleFooter, StyleAncora } from './style'
import { useContext } from 'react'
import { ContextDadosDaApi } from '../../contexts/ContextDadosDaApi'

export function Footer() {
  const context = useContext(ContextDadosDaApi)
  if (!context) {
    return <div>Loading...</div>
  }
  const { dadosUser } = context
  return (
    <StyleLayout>
      <StyleFooter>
        <div>
          <h4>Contato:</h4>
          <p>
            <At size={20} />: <span>minhacontajonas@gmail.com</span>
          </p>
          <p>
            <LinkedinLogo size={20} />:{' '}
            <StyleAncora href={dadosUser?.blog} target="_brack">
              {dadosUser?.login}
            </StyleAncora>
          </p>
          <p>
            <GithubLogo size={20} />:{' '}
            <StyleAncora href={dadosUser?.html_url} target="_brack">
              {dadosUser?.login}
            </StyleAncora>
          </p>
        </div>
      </StyleFooter>
    </StyleLayout>
  )
}
