import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;

  > a {
    line-height: 0;
  }

  nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    span {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;

      font: ${({ theme }) => theme.fonts['roboto-400']};
      color: ${({ theme }) => theme.colors['purple-dark']};
      font-size: 0.875rem;
      line-height: 1.3rem;

      background: ${({ theme }) => theme.colors['purple-light']};
      border-radius: 6px;
      transition: background 2s;
    }

    a {
      padding: 0.5rem;
      line-height: 0;
      color: ${({ theme }) => theme.colors['yellow-dark']};
      background: ${({ theme }) => theme.colors['yellow-light']};
      border-radius: 6px;
    }
  }
`
