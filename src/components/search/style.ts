import styled from 'styled-components'

export const StylelayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.75rem;

  /* border: 1px solid; */
`

export const StyleContainer = styled.div`
  /* border: 1px solid red; */

  width: 864px;
  height: 5.6875rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 14px;
      color: ${(props) => props.theme['base-span']};
    }
  }
  input {
    height: 50px;
    background: ${(props) => props.theme['base-input']};
    border: none;
    padding: 16px;
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};
    border: 1px solid transparent;
    &:hover {
      border: 1px solid ${(props) => props.theme['base-blue']};
    }
  }
`
