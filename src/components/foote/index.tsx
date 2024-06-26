import { At, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { StyleLayout, StyleFooter, StyleAncora } from './style'

export function Footer() {
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
            <StyleAncora
              href="https://www.linkedin.com/in/dev-jonasfranco/"
              target="_brack"
            >
              dev-jonasfranco
            </StyleAncora>
          </p>
          <p>
            <GithubLogo size={20} />:{' '}
            <StyleAncora
              href="https://github.com/devJonasfranco"
              target="_brack"
            >
              devJonasfranco
            </StyleAncora>
          </p>
        </div>
      </StyleFooter>
    </StyleLayout>
  )
}
