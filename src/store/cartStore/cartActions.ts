import { CoffeeCart } from './cartContext'

interface SetQuantityProps {
  coffeeId: string
  quantity: number
}

export const CartActionTypes = {
  ADD_COFFEE: 'ADD_COFFEE',
  SET_QUANTITY: 'SET_QUANTITY',
}

export function addCoffee({ coffee, quantity }: CoffeeCart) {
  return {
    type: CartActionTypes.ADD_COFFEE,
    payload: {
      coffee,
      quantity,
    },
  }
}

export function setQuantity({ coffeeId, quantity }: SetQuantityProps) {
  return {
    type: CartActionTypes.SET_QUANTITY,
    payload: {
      coffeeId,
      quantity,
    },
  }
}
