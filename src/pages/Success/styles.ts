import styled from 'styled-components'

export const Container = styled.div`
  width: 70rem;
  margin: 5rem auto;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const CardSuccess = styled.div`
  & > h1 {
    font: ${({ theme }) => theme.fonts['baloo-800']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    font-size: 2rem;
    line-height: 2.6rem;
  }

  & > p {
    font: ${({ theme }) => theme.fonts['roboto-400']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.6rem;
  }
`

export const CardInfo = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-image: linear-gradient(
      ${({ theme }) => theme.colors.background},
      ${({ theme }) => theme.colors.background}
    ),
    linear-gradient(102.89deg, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border: 1px solid transparent;
  border-radius: 0.375rem 2.25rem;
`

const STATUS_COLORS = {
  purple: 'purple',
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Info = styled.div<StatusProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  & > svg {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme, statusColor }) =>
      theme.colors[STATUS_COLORS[statusColor]]};
  }

  & p {
    font: ${({ theme }) => theme.fonts['roboto-400']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 1rem;
    line-height: 1.31rem;
  }
`
