import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    width: 10rem;
    padding: 8px;

    position: absolute;
    bottom: calc(100% + 0.75rem);
    left: 50%;
    transform: translateX(-50%);

    font: ${({ theme }) => theme.fonts['roboto-400']};
    font-size: 0.87rem;
    color: ${({ theme }) => theme.colors['base-label']};

    opacity: 0;
    visibility: hidden;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 4px;
    transition: opacity 0.4s;

    &::before {
      content: '';

      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);

      border-style: solid;
      border-color: ${({ theme }) => theme.colors.yellow} transparent;
      border-width: 0.37rem 0.37rem 0 0.37rem;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
