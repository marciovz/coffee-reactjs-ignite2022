import styled from 'styled-components'
import backgroundIntro from '../../../assets/background-intro.svg'

export const IntroContainer = styled.div`
  width: 100%;
  background-image: url(${backgroundIntro});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const IntroContent = styled.div`
  width: 70rem;
  margin: 5.75rem auto;

  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  section {
    h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      font-weight: 800;
      line-height: 3.9rem;
      color: ${(props) => props.theme['base-title']};
    }

    h2 {
      margin-top: 1rem;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.625;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const IntroItemColumns = styled.div`
  margin-top: 4.125rem;
  display: flex;
  gap: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`

const STATUS_COLORS = {
  yellowDark: 'yellow-dark',
  grayDark: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const IntroItem = styled.span<StatusProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  svg {
    padding: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    color: ${(props) => props.theme.background};
  }

  p {
    line-height: 1.3rem;
  }
`
