import { ReactNode, createContext, useReducer } from 'react'
import { INITIAL_STATE, CartReducer } from './cartReducer'
import {
  addCoffee,
  setQuantity,
  incrementQuantity,
  decrementQuantity,
  removeCoffee,
  clearCart,
} from './cartActions'

interface Coffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

export interface CoffeeCart {
  coffee: Coffee
  quantity: number
}

interface CartContextData {
  coffeesCart: CoffeeCart[]
  addCoffeeToCart: (coffeeCart: CoffeeCart) => void
  setCoffeeQuantity: (id: string, quantity: number) => void
  incrementQuantityCoffee: (id: string) => void
  decrementQuantityCoffee: (id: string) => void
  removeCoffeeCart: (id: string) => void
  clearCoffeeCart: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(CartReducer, INITIAL_STATE)

  const { coffeesCart } = cartState

  function addCoffeeToCart(coffeeCart: CoffeeCart) {
    dispatch(addCoffee(coffeeCart))
  }

  function setCoffeeQuantity(id: string, quantity: number) {
    dispatch(setQuantity({ id, quantity }))
  }

  function incrementQuantityCoffee(id: string) {
    dispatch(incrementQuantity(id))
  }

  function decrementQuantityCoffee(id: string) {
    dispatch(decrementQuantity(id))
  }

  function removeCoffeeCart(id: string) {
    dispatch(removeCoffee(id))
  }

  function clearCoffeeCart() {
    dispatch(clearCart())
  }

  return (
    <CartContext.Provider
      value={{
        coffeesCart,
        addCoffeeToCart,
        setCoffeeQuantity,
        incrementQuantityCoffee,
        decrementQuantityCoffee,
        removeCoffeeCart,
        clearCoffeeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
