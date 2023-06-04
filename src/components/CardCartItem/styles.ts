import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  > img {
    width: 4rem;
    height: 4rem;
  }

  > p {
    font: ${({ theme }) => theme.fonts['roboto-700']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 1rem;
  }
`
export const BoxContent = styled.div`
  p {
    font: ${({ theme }) => theme.fonts['roboto-400']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 1rem;
  }
`
export const BoxButton = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const RemoveItemButton = styled.button`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font: ${({ theme }) => theme.fonts['roboto-400']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  line-height: 1.19rem;
  text-transform: uppercase;

  background: ${({ theme }) => theme.colors['base-button']};
  border-radius: 0.375rem;
  border: none;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors.purple};
  }
`
