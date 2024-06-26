import { HeaderContaine, StyleDiv, StyleImg } from './style'
import effect from '../../assets/effect.svg'
import effect02 from '../../assets/effect-02.svg'
import vector from '../../assets/Vector.svg'

export function Header() {
  return (
    <HeaderContaine>
      <StyleImg src={effect02} alt="" />
      <StyleDiv>
        <img src={vector} alt="" />
        <span>GITHUB BLOG</span>
      </StyleDiv>
      <img src={effect} alt="" />
    </HeaderContaine>
  )
}
