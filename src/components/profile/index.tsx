import avatar from '../../assets/avatar.png'
import {
  ArrowSquareOut,
  Building,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { StyleDivContainer, StyleDivProfile, StyleInforProfile } from './style'
export function Profile() {
  return (
    <StyleDivContainer>
      <StyleDivProfile>
        <img src={avatar} alt="" />
        <StyleInforProfile>
          <strong>
            Cameron Willianmson{' '}
            <a href="">
              GITHUB <ArrowSquareOut size={17} />
            </a>
          </strong>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <span>
            <a href="">
              <GithubLogo size={24} /> Cameronwll
            </a>
            <a href="">
              <Building size={24} /> Rocktseat
            </a>
            <a href="">
              <Users size={24} /> 32 seguidores
            </a>
          </span>
        </StyleInforProfile>
      </StyleDivProfile>
    </StyleDivContainer>
  )
}
