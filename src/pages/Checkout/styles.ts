import styled, { css } from 'styled-components'

interface ITypeIconProps {
  type: 'MapPinLine' | 'CurrencyDollar'
}

export const Container = styled.div`
  width: 70rem;
  margin: 2.5rem auto 15rem;

  display: flex;
  justify-content: space-between;
`

export const ContainerForm = styled.div`
  width: 40rem;

  h2 {
    font: ${({ theme }) => theme.fonts['baloo-700']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1.125rem;
  }
`

export const CardForm = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0.375rem;

  h3 {
    font: ${({ theme }) => theme.fonts['roboto-400']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1rem;
  }

  p {
    font: ${({ theme }) => theme.fonts['roboto-400']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 0.875rem;
  }
`

export const CardFormHeader = styled.div<ITypeIconProps>`
  display: flex;
  gap: 0.5rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;

    ${({ type }) =>
      type === 'MapPinLine' &&
      css`
        color: ${({ theme }) => theme.colors['yellow-dark']};
      `};

    ${({ type }) =>
      type === 'CurrencyDollar' &&
      css`
        color: ${({ theme }) => theme.colors.purple};
      `};
  }
`

export const Form = styled.form`
  margin-top: 2rem;
`

interface LineFormProps {
  cols?: string
}

export const LineForm = styled.div<LineFormProps>`
  margin-bottom: 1rem;
  display: grid;
  grid-gap: 0.75rem;

  grid-template-columns: ${({ cols }) =>
    cols || 'repeat(auto-fit, minmax(100px, 1fr))'};
`

export const PaymentContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`

export const CartContainer = styled.div`
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
