import { OrderProps } from './orderContext'

const ORDER_COLLECTION = '@ignite-coffee:order-0.0.1'

export function getOrderStorage() {
  const storage = sessionStorage.getItem(ORDER_COLLECTION)
  const coffeesCart = storage ? (JSON.parse(storage) as OrderProps) : null
  return coffeesCart
}

export function saveOrderStorage(coffeesCart: OrderProps) {
  sessionStorage.setItem(ORDER_COLLECTION, JSON.stringify(coffeesCart))
}

export function removeOrderStorage() {
  sessionStorage.removeItem(ORDER_COLLECTION)
}
