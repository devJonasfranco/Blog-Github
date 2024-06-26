import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import code from '../../assets/code.png'
import { NavLink } from 'react-router-dom'
import {
  StyleConteiner,
  StyleDivNomePost,
  StyleDivVoltar,
  StyleHeader,
  StyleLayout,
  StyledFooter,
  StyledTexto,
} from './style'
export function Commites() {
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
              <a href="https://github.com/devJonasfranco" target="_brack">
                VER NO GITHUB <ArrowSquareOut size={17} />
              </a>
            </p>
          </StyleDivVoltar>
          <StyleDivNomePost>
            <h4>JavaScript data type and data structures</h4>
            <span>
              <div>
                <GithubLogo size={24} /> <p>Cameronwll</p>
              </div>
              <div>
                <CalendarBlank size={32} /> <p>Há 1 dia</p>
              </div>
              <div>
                <ChatCircle size={32} /> <p>5 comentários</p>
              </div>
            </span>
          </StyleDivNomePost>
        </StyleHeader>
        <StyledTexto>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </StyledTexto>
        <StyledFooter>
          <img src={code} alt="" />
        </StyledFooter>
      </StyleConteiner>
    </StyleLayout>
  )
}
