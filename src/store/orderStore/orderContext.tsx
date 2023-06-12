import { ReactNode, createContext, useState, useContext } from 'react'

import { getOrderStorage, saveOrderStorage } from './orderStorage'

export interface OrderProps {
  address: {
    street: string
    number: string
    district: string
    city: string
    uf: string
  }
  order: {
    id: string
    title: string
    price: number
    quantity: number
  }[]
  paymentType: 'credit' | 'debit' | 'cash'
}

interface OrderContextProps {
  order: OrderProps | null
  saveOrder: (order: OrderProps) => void
}

const OrderContext = createContext({} as OrderContextProps)

interface OrderProviderProps {
  children: ReactNode
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState(getOrderStorage())

  function saveOrder(order: OrderProps) {
    saveOrderStorage(order)
    setOrder(order)
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        saveOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  return useContext(OrderContext)
}
