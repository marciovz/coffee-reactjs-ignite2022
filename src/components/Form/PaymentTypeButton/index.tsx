import { CreditCard, Money, Bank } from 'phosphor-react'

import { Button } from './styles'

interface PaymentTypeButtonProps {
  title: string
  type: 'credit' | 'debit' | 'cash'
  isActive: boolean
  onClick: () => void
}

export function PaymentTypeButton({
  title,
  type,
  isActive,
  onClick,
}: PaymentTypeButtonProps) {
  function handleOnClick() {
    onClick()
  }
  return (
    <Button isActive={isActive} onClick={handleOnClick}>
      {type === 'credit' && <CreditCard />}
      {type === 'debit' && <Bank />}
      {type === 'cash' && <Money />}
      {title}
    </Button>
  )
}
