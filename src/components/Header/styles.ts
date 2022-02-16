import styled from "styled-components"

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: #fff;
    background: var(--blue);
    border: 0;
    border-radius: 50%;
    height: 2rem;

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
