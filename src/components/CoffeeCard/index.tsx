import { useMemo, useState } from 'react'
import { AddCartButton } from '../AddCartButton'
import { CounterButton } from '../CounterButton'
import { CardContainer, TagContainer, BuyContainer } from './styles'

interface ICoffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

interface ICoffeeCardProps {
  coffee: ICoffee
  onAddToCart: (coffeeId: string, quantity: number) => void
}

export function CoffeeCard({ coffee, onAddToCart }: ICoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const handleNewQuantity = (value: number) => {
    setQuantity(value)
  }

  const handleAddToCart = () => {
    if (quantity <= 0) return

    onAddToCart(coffee.id, quantity)
  }

  const priceFormated = useMemo(() => {
    return coffee.price.toLocaleString('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }, [coffee.price])

  return (
    <CardContainer>
      <img src={`/images/${coffee.image}`} alt={`Chicará de ${coffee.title}`} />
      <TagContainer>
        {coffee.tag.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagContainer>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <BuyContainer>
        <p>
          <span>R$</span>
          {priceFormated}
        </p>
        <div>
          <CounterButton
            initialValue={1}
            minValue={1}
            maxValue={100}
            onClick={handleNewQuantity}
          />
          <AddCartButton onClick={handleAddToCart} />
        </div>
      </BuyContainer>
    </CardContainer>
  )
}
