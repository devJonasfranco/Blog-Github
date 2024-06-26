import styled from 'styled-components'

export const StyleLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  span {
    display: flex;
    gap: 30px;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }
    svg {
      color: ${(props) => props.theme['base-span']};
      &:hover {
        color: ${(props) => props.theme['base-blue']};
      }
    }
  }
`
