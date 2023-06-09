import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 2rem;
`

interface LineFormProps {
  cols?: string
}

export const LineForm = styled.div<LineFormProps>`
  margin-bottom: 1rem;
  display: grid;
  grid-gap: 0.75rem;

  grid-template-columns: ${({ cols }) =>
    cols || 'repeat(auto-fit, minmax(100px, 1fr))'};
`
