import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { useCart } from '../../store/hooks'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { HeaderContainer, ButtonCart, RegionLabel } from './styles'

export function Header() {
  const { coffeesCart } = useCart()
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <nav>
        <RegionLabel>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </RegionLabel>

        <NavLink to="/checkout" title="cart">
          <ButtonCart>
            {coffeesCart?.length > 0 && <span>{coffeesCart.length}</span>}
            <ShoppingCart size={22} weight="fill" />
          </ButtonCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
