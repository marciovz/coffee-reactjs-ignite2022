import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.5rem;
  line-height: 0;
  color: ${({ theme }) => theme.colors['base-card']};
  border: 0;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['purple-dark']};

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.purple};
  }
`
