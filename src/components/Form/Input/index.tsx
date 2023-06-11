import { InputHTMLAttributes, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { WarningCircle } from 'phosphor-react'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  opcional?: boolean
}

export function Input({ name, opcional = false, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { register, formState, watch } = useFormContext()
  const error = formState.errors[name]
  const currentValue = watch(name)

  const isErrored = !!(error && !isFocused)

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!currentValue)
  }

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={isErrored}>
      <input
        {...register(name)}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      {opcional && <p>Opcional</p>}

      {isErrored && error.message && (
        <Error title={error.message.toString()}>
          <WarningCircle weight="fill" />
        </Error>
      )}
    </Container>
  )
}
