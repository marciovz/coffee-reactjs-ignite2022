import styled, { css } from 'styled-components'

interface PaymentButtonProps {
  isActive: boolean
}

export const Button = styled.button<PaymentButtonProps>`
  min-width: 11rem;
  padding: 1rem;

  font: ${({ theme }) => theme.fonts['roboto-400']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  background: ${({ theme }) => theme.colors['base-button']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 0.375rem;
  transition: 0.2s;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.colors['purple-light']};
      border: 1px solid ${theme.colors['purple-dark']};
    `}

  &:hover {
    ${({ isActive, theme }) =>
      !isActive &&
      css`
        cursor: pointer;
        background: ${theme.colors['base-hover']};
      `}
  }

  > svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors.purple};
  }
`
