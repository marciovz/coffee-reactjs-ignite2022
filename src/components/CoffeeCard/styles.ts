import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 2.25rem 6px 2.25rem;

  > img {
    margin-top: -2.5rem;
    width: 7.5rem;
  }

  h3 {
    margin-top: 1rem;
    font: ${({ theme }) => theme.fonts['baloo-700']};
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  > p {
    margin-top: 0.5rem;
    font: ${({ theme }) => theme.fonts['roboto-400']};
    font-size: 0.875rem;
    line-height: 1.1375rem;
    text-align: center;
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const TagContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    font: ${({ theme }) => theme.fonts['roboto-700']};
    font-size: 0.625rem;
    line-height: 0.8125rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors['yellow-dark']};
    background: ${({ theme }) => theme.colors['yellow-light']};

    border-radius: 1rem;
  }
`

export const BuyContainer = styled.div`
  width: 100%;
  margin-top: 2.0625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font: ${({ theme }) => theme.fonts['baloo-800']};
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.95rem;
    color: ${({ theme }) => theme.colors['base-text']};

    span {
      margin-right: 4px;
      font: ${({ theme }) => theme.fonts['roboto-400']};
      font-size: 0.875rem;
      line-height: 1.1375rem;
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
`
