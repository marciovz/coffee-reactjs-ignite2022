import styled from 'styled-components'

export const ButtonContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  span {
    min-width: 1.25rem;
    text-align: center;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
  }

  button {
    border: 0;
    line-height: 0;
    background: transparent;

    cursor: pointer;

    svg {
      color: ${(props) => props.theme.purple};

      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`
