import styled from 'styled-components'

export const Container = styled.div`
  width: 28rem;

  h2 {
    font: ${({ theme }) => theme.fonts['baloo-700']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1.125rem;
  }
`
export const Cart = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0.375rem 2.75rem;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    font: ${({ theme }) => theme.fonts['roboto-400']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 0.875rem;

    span {
      font-size: 1rem;
    }
  }

  div:last-child {
    font: ${({ theme }) => theme.fonts['roboto-700']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const ButtonConfirm = styled.button`
  width: 100%;
  padding: 0.75rem 1.125rem;

  font: ${({ theme }) => theme.fonts['roboto-700']};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 1.375rem;

  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 0.375rem;
  border: none;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
