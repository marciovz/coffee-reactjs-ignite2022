import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 2.25rem 6px 2.25rem;

  > img {
    margin-top: -2.5rem;
    width: 7.5rem;
  }

  h3 {
    margin-top: 1rem;
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.1375rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const TagContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.8125rem;
    text-transform: uppercase;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    border-radius: 1rem;
  }
`

export const BuyContainer = styled.div`
  border: 1px solid green;
  width: 100%;
  margin-top: 2.0625rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.95rem;
    color: ${(props) => props.theme['base-text']};

    span {
      margin-right: 4px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
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
