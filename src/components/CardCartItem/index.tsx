import { Trash } from 'phosphor-react'

import { CounterButton } from '../CounterButton'
import { formatPrice } from '../../utils/formatPrice'

import { Container, BoxContent, BoxButton, RemoveItemButton } from './styles'

interface Coffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

interface CoffeeCart {
  coffee: Coffee
  quantity: number
}

interface CardCartItemProps {
  coffeeCart: CoffeeCart
  onIncrementCoffee: (id: string) => void
  onDecrementCoffee: (id: string) => void
  onRemoveCoffee: (id: string) => void
}

export function CardCartItem({
  coffeeCart,
  onIncrementCoffee,
  onDecrementCoffee,
  onRemoveCoffee,
}: CardCartItemProps) {
  const { coffee, quantity } = coffeeCart

  function handleIncrementCoffee() {
    onIncrementCoffee(coffee.id)
  }

  function handleDecrementCoffee() {
    onDecrementCoffee(coffee.id)
  }

  function handleRemoveCoffee() {
    onRemoveCoffee(coffee.id)
  }

  const formattedTotalItem = formatPrice(coffee.price * quantity)

  return (
    <Container>
      <img src={`/images/${coffee.image}`} alt={coffee.title} />
      <BoxContent>
        <p>{coffee.title}</p>
        <BoxButton>
          <CounterButton
            control="external"
            value={coffeeCart.quantity}
            minValue={1}
            onClickIncrement={handleIncrementCoffee}
            onClickDecrement={handleDecrementCoffee}
          />
          <RemoveItemButton onClick={handleRemoveCoffee}>
            <Trash />
            Remover
          </RemoveItemButton>
        </BoxButton>
      </BoxContent>
      <p>{formattedTotalItem}</p>
    </Container>
  )
}
