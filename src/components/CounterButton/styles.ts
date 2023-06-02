import styled from 'styled-components'

export const ButtonContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  span {
    min-width: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem;
  }

  button {
    border: 0;
    line-height: 0;
    background: transparent;

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors.purple};

      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors['purple-dark']};
      }
    }
  }
`
