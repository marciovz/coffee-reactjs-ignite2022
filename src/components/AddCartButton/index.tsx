import { ShoppingCartSimple } from 'phosphor-react'

import { ButtonContainer } from './style'

interface IAddCartButton {
  onClick: () => void
}

export function AddCartButton({ onClick }: IAddCartButton) {
  const handleClick = () => {
    onClick()
  }
  return (
    <ButtonContainer onClick={handleClick}>
      <ShoppingCartSimple size={22} weight="fill" />
    </ButtonContainer>
  )
}
