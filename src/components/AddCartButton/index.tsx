import { ShoppingCartSimple } from 'phosphor-react'

import { ButtonContainer } from './style'

interface IAddCartButton {
  onClick: () => void
}

export function AddCartButton({ onClick }: IAddCartButton) {
  return (
    <ButtonContainer onClick={onClick}>
      <ShoppingCartSimple size={22} weight="fill" />
    </ButtonContainer>
  )
}
