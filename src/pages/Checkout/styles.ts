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

export const PaymentContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`
