import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'
import { WarningCircle } from 'phosphor-react'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  error?: FieldError | undefined
  opcional?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, opcional = false, error = null, ...rest },
  ref,
) => {
  return (
    <Container
      isFocused={false}
      isFilled={false}
      isErrored={false}
      data-testid="input-container"
    >
      <input name={name} ref={ref} {...rest} />

      {opcional && <p>Opcional</p>}

      {error && (
        <Error title={error.message || ''}>
          <WarningCircle size={20} color="#AB222E" weight="fill" />
        </Error>
      )}
    </Container>
  )
}

export const Input = forwardRef(InputBase)
