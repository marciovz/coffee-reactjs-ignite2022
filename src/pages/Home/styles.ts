import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  width: 70rem;
  margin: 2rem auto 10rem;

  h2 {
    font: ${({ theme }) => theme.fonts['baloo-800']};
    font-size: 2rem;
    line-height: 2.3rem;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`
export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3.375rem;
`
