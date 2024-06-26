import styled from 'styled-components'

export const HeaderContaine = styled.header`
  width: 90rem;
  height: 18.5rem;

  background: ${(props) => props.theme['base-post']};

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const StyleImg = styled.img`
  margin-top: 1.25rem;
`
export const StyleDiv = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 4.375rem; */

  span {
    color: ${(props) => props.theme['base-blue']};
    font-size: 1.5rem;
  }
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 4.375rem;
    text-decoration: none;
    box-shadow: none;
  }
`
