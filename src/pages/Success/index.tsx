import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import imgDelivery from '../../assets/img-delivery.svg'

import { Container, CardSuccess, CardInfo, Info } from './styles'

export function Success() {
  return (
    <Container>
      <CardSuccess>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <CardInfo>
          <Info statusColor={'purple'}>
            <MapPin weight="fill" />
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
              <p>Farrapos - Porto Alegre, RS</p>
            </p>
          </Info>
          <Info statusColor="yellow">
            <Timer weight="fill" />
            <p>
              Previsão de entrega
              <p>
                <strong>20 min a 30 min</strong>
              </p>
            </p>
          </Info>
          <Info statusColor="yellowDark">
            <CurrencyDollar weight="fill" />
            <p>
              Pagamento na entrega
              <p>
                <strong>Cartão de crédito</strong>
              </p>
            </p>
          </Info>
        </CardInfo>
      </CardSuccess>

      <img src={imgDelivery} alt="" />
    </Container>
  )
}
