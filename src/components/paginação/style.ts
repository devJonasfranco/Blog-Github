import styled from 'styled-components'

export const StyleLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  span {
    display: flex;
    gap: 30px;

    button {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme['base-span']};
      border: none;
      background: transparent;
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme['base-blue']};
      }
    }
    svg {
      color: ${(props) => props.theme['base-span']};
      &:hover {
        color: ${(props) => props.theme['base-blue']};
      }
    }
  }
`
