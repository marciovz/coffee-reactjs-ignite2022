import { CoffeeCart } from './cartContext'

const CART_COLLECTION = '@ignite-coffee:cart-0.0.1'

export function getCoffeesCart() {
  const storage = localStorage.getItem(CART_COLLECTION)
  const coffeesCart: CoffeeCart[] = storage ? JSON.parse(storage) : []
  return coffeesCart
}

export function saveCoffeeCart(coffeesCart: CoffeeCart[]) {
  localStorage.setItem(CART_COLLECTION, JSON.stringify(coffeesCart))
}

export function removeCoffeeCart() {
  localStorage.removeItem(CART_COLLECTION)
}
