import { Trash } from 'phosphor-react'

import { CounterButton } from '../CounterButton'

import { Container, BoxContent, BoxButton, RemoveItemButton } from './styles'

export function CardCartItem() {
  return (
    <Container>
      <img src={`/images/arabe.png`} alt={`Chicará de café`} />
      <BoxContent>
        <p>Expresso Tradicional</p>
        <BoxButton>
          <CounterButton onClick={() => {}} />
          <RemoveItemButton>
            <Trash />
            Remover
          </RemoveItemButton>
        </BoxButton>
      </BoxContent>
      <p>R$ 9,90</p>
    </Container>
  )
}
