import { useEffect, useState } from 'react'
import { Plus, Minus } from 'phosphor-react'

import { ButtonContainer } from './styles'

interface CounterButtonProps {
  control?: 'internal' | 'external'
  value?: number
  initialValue?: number
  maxValue?: number
  minValue?: number
  onClickIncrement?: (newValue: number | null) => void
  onClickDecrement?: (newValue: number | null) => void
  // onClickQuantity?: (newValue: number) => void
}

export function CounterButton({
  control = 'internal',
  value = 0,
  initialValue = 0,
  maxValue = 100,
  minValue = 0,
  onClickIncrement = () => {},
  onClickDecrement = () => {},
}: CounterButtonProps) {
  const [valueDisplay, setValueDisplay] = useState(initialValue)

  useEffect(() => {
    if (control === 'external') {
      setValueDisplay(value)
    }
  }, [control, value])

  const handleIncrementValue = () => {
    if (control === 'internal') {
      if (valueDisplay < maxValue) {
        const newState = valueDisplay + 1
        setValueDisplay(newState)
        onClickIncrement(newState)
      }
    } else {
      onClickIncrement(null)
    }
  }

  const handleDecrementValue = () => {
    if (control === 'internal') {
      if (valueDisplay > minValue) {
        const newState = valueDisplay - 1
        setValueDisplay(newState)
        onClickDecrement(newState)
      }
    } else {
      onClickDecrement(null)
    }
  }

  return (
    <ButtonContainer>
      <button onClick={handleDecrementValue}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{valueDisplay}</span>
      <button onClick={handleIncrementValue}>
        <Plus size={14} weight="bold" />
      </button>
    </ButtonContainer>
  )
}
