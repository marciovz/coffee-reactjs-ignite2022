import { useState } from 'react'
import { AddCartButton } from '../../../components/AddCartButton'
import { CounterButton } from '../../../components/CounterButton'
import { CardContainer, TagContainer, BuyContainer } from './styles'

interface ICoffee {
  id: string
  tag: string[]
  title: string
  description: string
  price: number
  image: string
}

interface IShoppingCartItem {
  id: string
  quantity: number
}

interface ICoffeeCardProps {
  coffee: ICoffee
  onSubmitToShoppingCart: (shoppingCartItem: IShoppingCartItem) => void
}

export function CoffeeCard({
  coffee,
  onSubmitToShoppingCart,
}: ICoffeeCardProps) {
  const [quantity, setQuantity] = useState(0)

  const handleNewQuantity = (value: number) => {
    console.log(value)
    setQuantity(value)
  }

  const handleAddToCart = () => {
    if (quantity <= 0) return

    onSubmitToShoppingCart({
      id: coffee.id,
      quantity,
    })
  }

  const priceFormated = '9,90'

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
            initialValue={0}
            minValue={0}
            maxValue={100}
            onClick={handleNewQuantity}
          />
          <AddCartButton onClick={handleAddToCart} />
        </div>
      </BuyContainer>
    </CardContainer>
  )
}
