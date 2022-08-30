import { Plus, Minus } from 'phosphor-react'
import { useState } from 'react'

import { ButtonContainer } from './styles'

interface CounterButtonProps {
  initialValue?: number
  maxValue?: number
  minValue?: number
  onClick: (value: number) => void
}

export function CounterButton({
  initialValue = 0,
  maxValue = 100,
  minValue = 0,
  onClick,
}: CounterButtonProps) {
  const [value, setValue] = useState(initialValue)

  const increaseValue = () => {
    if (value < maxValue) {
      const newState = value + 1
      setValue(newState)
      onClick(newState)
    }
  }

  const decreaseValue = () => {
    if (value > minValue) {
      const newState = value - 1
      setValue(newState)
      onClick(newState)
    }
  }

  return (
    <ButtonContainer>
      <button onClick={increaseValue}>
        <Plus size={14} weight="bold" />
      </button>
      <span>{value}</span>
      <button onClick={decreaseValue}>
        <Minus size={14} weight="bold" />
      </button>
    </ButtonContainer>
  )
}
