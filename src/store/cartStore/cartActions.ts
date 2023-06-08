import { CoffeeCart } from './cartContext'

interface SetQuantityProps {
  id: string
  quantity: number
}

export const CartActionTypes = {
  ADD_COFFEE: 'ADD_COFFEE',
  SET_QUANTITY: 'SET_QUANTITY',
  INCREMENT_QUANTITY: 'INCREMENT_QUANTITY',
  DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
  REMOVE_COFFEE: 'REMOVE_COFFEE',
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

export function setQuantity({ id, quantity }: SetQuantityProps) {
  return {
    type: CartActionTypes.SET_QUANTITY,
    payload: {
      id,
      quantity,
    },
  }
}

export function incrementQuantity(id: string) {
  return {
    type: CartActionTypes.INCREMENT_QUANTITY,
    payload: {
      id,
    },
  }
}

export function decrementQuantity(id: string) {
  return {
    type: CartActionTypes.DECREMENT_QUANTITY,
    payload: {
      id,
    },
  }
}

export function removeCoffee(id: string) {
  return {
    type: CartActionTypes.REMOVE_COFFEE,
    payload: {
      id,
    },
  }
}
