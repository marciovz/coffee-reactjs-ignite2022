import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../store/hooks'
import { captalise } from '../../utils/capitalise'
import { CardCartItem } from '../CardCartItem'
import { formatPrice } from '../../utils/formatPrice'

import {
  Container,
  Cart,
  Description,
  ButtonConfirm,
  EmptyCart,
} from './styles'

interface Coffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

interface CoffeeOrderCart {
  coffee: Coffee
  quantity: number
}

export function CartOrderCard() {
  const [coffeesOrder, setCoffeesOrder] = useState<CoffeeOrderCart[]>([])

  const navigate = useNavigate()
  const { coffeesCart } = useCart()

  const isOrderCartEmpty = coffeesCart.length === 0
  const deliveryFee = 3.5

  const totalPriceItems = useMemo(() => {
    return coffeesOrder.reduce((acc, order) => {
      return acc + order.coffee.price * order.quantity
    }, 0)
  }, [coffeesOrder])

  useEffect(() => {
    const FormattedCoffeeCart = coffeesCart.map((coffeeCartItem) => {
      return {
        coffee: {
          ...coffeeCartItem.coffee,
          title: captalise(coffeeCartItem.coffee.title),
          // priceFormated: formatPrice(coffeeCartItem.coffee.price),
        },
        quantity: coffeeCartItem.quantity,
      }
    })
    setCoffeesOrder(FormattedCoffeeCart)
  }, [coffeesCart])

  function handleConfirm() {
    if (isOrderCartEmpty) {
      navigate('/')
      return
    }
    navigate('/success')
  }

  const FormattedTotalPriceItems = formatPrice(totalPriceItems)
  const FormattedDeliveryFee = formatPrice(deliveryFee)
  const FormattedTotal = formatPrice(totalPriceItems + deliveryFee)

  return (
    <Container>
      <h2>Cafés selecionados</h2>
      <Cart>
        {isOrderCartEmpty ? (
          <EmptyCart>
            <span>
              Ops.
              <p>Seu carrinho está vazio</p>
            </span>
          </EmptyCart>
        ) : (
          <>
            {coffeesOrder.map((coffeeCart) => (
              <CardCartItem
                key={coffeeCart.coffee.id}
                coffeeCart={coffeeCart}
              />
            ))}
            <Description>
              <div>
                <p>Total de ítens</p>
                <span>{FormattedTotalPriceItems}</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>{FormattedDeliveryFee}</span>
              </div>
              <div>
                <p>Total</p>
                <span>{FormattedTotal}</span>
              </div>
            </Description>
          </>
        )}

        <ButtonConfirm onClick={handleConfirm}>
          {isOrderCartEmpty ? 'Selecionar pedidos' : 'Confirmar Pedido'}
        </ButtonConfirm>
      </Cart>
    </Container>
  )
}
