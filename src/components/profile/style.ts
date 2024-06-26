import styled from 'styled-components'

export const StyleDivContainer = styled.div`
  display: flex;

  justify-content: center;
  margin-top: -6.25rem;
`
export const StyleDivProfile = styled.div`
  width: 54rem;
  height: 13.25rem;
  padding: 2rem 2.5rem;
  border-radius: 8px;

  background: ${(props) => props.theme['base-profile']};

  display: flex;
  gap: 2rem;
`

export const StyleInforProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  strong {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-blue']};
      text-decoration: none;
      font-size: 0.9rem;
      svg {
        margin-bottom: 5px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${(props) => props.theme['base-text']};
  }
  span {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      color: ${(props) => props.theme['base-subtitle']};
      text-decoration: none;
      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
    a:hover {
      text-decoration: underline;
      color: ${(props) => props.theme['base-blue']};
    }
  }
`
