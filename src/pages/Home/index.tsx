import { useEffect, useState } from 'react'

import { api } from '../../services/api'
import { Intro } from './Intro'
import { CoffeeCard } from '../../components/CoffeeCard'

import { CoffeeListContainer, CoffeeList } from './styles'

interface ICoffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

const mockCoffeeList = [
  {
    id: '1',
    tag: ['tradicional', 'teste'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    image: 'expresso_tradicional.svg',
  },
  {
    id: '2',
    tag: ['tradicional'],
    title: 'Expresso americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    image: 'expresso_americano.svg',
  },
]

export function Home() {
  const [coffeeList, setCoffeeList] = useState<ICoffee[]>([])

  function editShoppingCart() {}

  useEffect(() => {
    async function loadCoffees() {
      const requestData = await api.get('/coffeeList')
      setCoffeeList(requestData.data)
    }
    loadCoffees()
  }, [])

  return (
    <>
      <Intro />
      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffeeList.map((item) => (
            <CoffeeCard
              key={item.id}
              coffee={item}
              onAddToCart={editShoppingCart}
            />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </>
  )
}
