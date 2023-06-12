import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from 'react'
import { api } from '../../services/api'

interface CoffeesProviderProps {
  children: ReactNode
}

interface Coffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

interface CoffeesContextData {
  coffeeList: Coffee[]
}

const CoffeesContext = createContext({} as CoffeesContextData)

export function CoffeesProvider({ children }: CoffeesProviderProps) {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([])

  useEffect(() => {
    async function loadCoffeesApi() {
      const requestData = await api.get('/coffeeList')
      setCoffeeList(requestData.data)
    }
    loadCoffeesApi()
  }, [])

  return (
    <CoffeesContext.Provider value={{ coffeeList }}>
      {children}
    </CoffeesContext.Provider>
  )
}

export function useCoffees() {
  return useContext(CoffeesContext)
}
