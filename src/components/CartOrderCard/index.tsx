import { useNavigate } from 'react-router-dom'

import { useCart, useCoffees } from '../../store/hooks'
import { captalise } from '../../utils/capitalise'
import { CardCartItem } from '../CardCartItem'
import { formatPrice } from '../../utils/formatPrice'

import { Container, Cart, Description, ButtonConfirm } from './styles'

export function CartOrderCard() {
  const navigate = useNavigate()
  const { coffeesCart } = useCart()
  const { coffeeList } = useCoffees()

  function handleConfirm() {
    navigate('/success')
  }

  const coffees = coffeesCart
    .map(
      (coffeeItem) =>
        coffeeList.filter((coffee) => coffeeItem.coffeeId === coffee.id)[0],
    )
    .map((coffee) => ({
      ...coffee,
      title: captalise(coffee.title),
      priceFormated: formatPrice(coffee.price),
    }))

  console.log(coffees)

  return (
    <Container>
      <h2>Cafés selecionados</h2>
      <Cart>
        {coffees.length === 0 ? (
          <p>Carrinho Vazio</p>
        ) : (
          coffees.map((coffee) => (
            <CardCartItem key={coffee.id} coffee={coffee} />
          ))
        )}
        <Description>
          <div>
            <p>Total de ítens</p>
            <span>R$ 29,70</span>
          </div>
          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>
          <div>
            <p>Total</p>
            <span>R$ 33,20</span>
          </div>
        </Description>
        <ButtonConfirm onClick={handleConfirm}>Confirmar Pedido</ButtonConfirm>
      </Cart>
    </Container>
  )
}
