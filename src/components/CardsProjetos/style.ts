import styled from 'styled-components'

export const StyleLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  min-height: 700px;
  /* border: 1px solid; */
`
export const StyleConteinerUl = styled.ul`
  width: 54rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 2rem;

  /* border: 1px solid red; */

  li {
    list-style: none;
    a {
      text-decoration: none;
    }
  }
`

export const StyleSection = styled.section`
  width: 26rem;
  height: 16.25rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border: 1px solid ${(props) => props.theme['base-span']};
  }
  div {
    display: flex;
    justify-content: space-between;
    line-height: 1.875rem;
    strong {
      width: 17.6875rem;
      height: 4rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};

      overflow: hidden;
      text-overflow: ellipsis;
      /* overflow-wrap: break-word; */
      /* white-space: nowrap; */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      /* border: 1px solid; */
      width: 12.5rem;
      margin-top: -1.25rem;
      margin-right: -20px;
      display: flex;
      justify-content: end;
    }
  }
  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.5625rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    /* overflow-wrap: break-word; */
  }
`
