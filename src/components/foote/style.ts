import styled from 'styled-components'

export const StyleLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`
export const StyleFooter = styled.footer`
  /* border: 1px solid; */
  width: 54rem;
  padding: 20px;
  line-height: 30px;
  color: ${(props) => props.theme['base-blue']};
  div p span {
    color: ${(props) => props.theme['base-span']};
  }
`
export const StyleAncora = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme['base-span']};
  &:hover {
    color: ${(props) => props.theme['base-blue']};
    text-decoration: underline;
  }
`
