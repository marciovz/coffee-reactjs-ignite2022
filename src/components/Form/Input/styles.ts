import styled, { css } from 'styled-components'

import { Tooltip } from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  padding: 0.75rem;
  width: '100%';

  background: ${({ theme }) => theme.colors['base-input']};
  border: 2px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isFilled &&
    css`
      border-color: ${({ theme }) => theme.colors['yellow-dark']};
    `}

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors['red-warning']};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors['yellow-dark']};
    `}

  input {
    flex: 1;
    width: 100%;

    font: ${({ theme }) => theme.fonts['roboto-400']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: 0.875rem;
    line-height: 1.125rem;

    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }

  & > p {
    padding-left: 0.3rem;
    font: ${({ theme }) => theme.fonts['roboto-400']};
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-style: italic;
  }
`

export const Error = styled(Tooltip)`
  height: 1.25rem;
  margin-left: 1rem;
  position: absolute;
  right: 10px;

  & > svg {
    margin: 0;
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.colors['red-warning']};
  }
`
