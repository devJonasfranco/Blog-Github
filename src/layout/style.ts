import styled from 'styled-components'

export const StyleMain = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
`
export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;

  width: 90rem;
  /* height: 800px; */
  background: ${(props) => props.theme['base-background']};
`
