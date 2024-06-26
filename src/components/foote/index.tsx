import { StyleLayout, StyleFooter, StyleAncora } from './style'

export function Footer() {
  return (
    <StyleLayout>
      <StyleFooter>
        <div>
          <h4>Contato:</h4>
          <p>
            Email: <span>minhacontajonas@gmail.com</span>
          </p>
          <p>
            Linkedin:{' '}
            <StyleAncora href="https://www.linkedin.com/in/dev-jonasfranco/">
              dev-jonasfranco
            </StyleAncora>
          </p>
          <p>
            GitHub:{' '}
            <StyleAncora href="https://github.com/devJonasfranco">
              devJonasfranco
            </StyleAncora>
          </p>
        </div>
      </StyleFooter>
    </StyleLayout>
  )
}
