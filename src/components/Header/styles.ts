import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    span {
      display: flex;
      padding: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.3rem;
      align-items: center;
      color: ${(props) => props.theme['purple-dark']};
      background: ${(props) => props.theme['purple-light']};
      border-radius: 6px;
      transition: background 2s;
    }

    a {
      padding: 0.5rem;
      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};
      border-radius: 6px;
    }
  }
`
