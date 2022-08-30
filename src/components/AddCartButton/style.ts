import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.5rem;
  line-height: 0;
  color: ${(props) => props.theme['base-card']};
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
