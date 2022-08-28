import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>
        <NavLink to="/checkout" title="cart">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
