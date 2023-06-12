import { Navigate } from 'react-router-dom'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { useOrder } from '../../store/hooks'
import imgDelivery from '../../assets/img-delivery.svg'

import { Container, CardSuccess, CardInfo, Info } from './styles'

export function Success() {
  const { order } = useOrder()

  if (order === null) {
    return <Navigate to="/" />
  }

  const { paymentType } = order
  const { street, number, district, city, uf } = order.address

  const paymentTypeTranslation = {
    cash: 'dinheiro',
    credit: 'crédito',
    debit: 'débito',
  }

  return (
    <Container>
      <CardSuccess>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <CardInfo>
          <Info statusColor={'purple'}>
            <MapPin weight="fill" />
            <div>
              <p>
                Entrega em
                <strong>{` ${street}, ${number}`}</strong>
              </p>
              <p>{`${district} - ${city}, ${uf}`}</p>
            </div>
          </Info>
          <Info statusColor="yellow">
            <Timer weight="fill" />
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min a 30 min</strong>
              </p>
            </div>
          </Info>
          <Info statusColor="yellowDark">
            <CurrencyDollar weight="fill" />
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>
                  Pagamento no {paymentTypeTranslation[paymentType]}
                </strong>
              </p>
            </div>
          </Info>
        </CardInfo>
      </CardSuccess>

      <img src={imgDelivery} alt="" />
    </Container>
  )
}
