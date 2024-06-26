import styled from 'styled-components'

export const StyleLayout = styled.div`
  display: flex;
  justify-content: center;
`
export const StyleConteiner = styled.div`
  width: 54rem;
  height: 36.875rem;

  margin-top: -100px;
`

export const StyleHeader = styled.header`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`
export const StyleDivVoltar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-blue']};
    font-size: 0.75rem;
    text-decoration: none;
    svg {
      margin-bottom: 2px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  p a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-blue']};
    font-size: 0.75rem;
    text-decoration: none;
    gap: 5px;
    svg {
      margin-bottom: 4px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`
export const StyleDivNomePost = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  h4 {
    font-size: 1.5rem;

    color: ${(props) => props.theme['base-title']};
  }
  span {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    gap: 2rem;
    color: ${(props) => props.theme['base-label']};
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        margin-bottom: 2px;
      }
    }
  }
`

export const StyledTexto = styled.p`
  padding: 2rem;
  width: 50rem;
  height: 13rem;
  line-height: 25px;
  color: ${(props) => props.theme['base-text']};
  font-size: 1.1rem;
`
export const StyledFooter = styled.footer`
  padding: 2rem;
  margin-top: 1.5rem;
`
