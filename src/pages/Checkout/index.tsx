import { useState } from 'react'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddressForm } from '../../components/Form/AddressForm'
import { PaymentTypeButton } from '../../components/Form/PaymentTypeButton'
import { CartOrderCard } from '../../components/CartOrderCard'

import {
  Container,
  ContainerForm,
  CardForm,
  CardFormHeader,
  PaymentContainer,
} from './styles'

type IPaymentType = 'credit' | 'debit' | 'cash' | 'none'

const addressFormValidatorSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP!').max(8, 'CEP inválido!').length(8),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
})

export type AddressFormData = zod.infer<typeof addressFormValidatorSchema>

export function Checkout() {
  const [paymentType, setPaymentType] = useState<IPaymentType>('none')

  const dataForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidatorSchema),
  })

  const { handleSubmit, formState } = dataForm

  const { errors } = formState
  console.log(errors)

  function confirmOrder(data: AddressFormData) {
    console.log(data)
  }

  return (
    <Container>
      <FormProvider {...dataForm}>
        <ContainerForm>
          <h2>Complete seu pedido</h2>

          <CardForm>
            <CardFormHeader type="MapPinLine">
              <MapPinLine />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CardFormHeader>

            <AddressForm />
          </CardForm>

          <CardForm>
            <CardFormHeader type="CurrencyDollar">
              <CurrencyDollar />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CardFormHeader>

            <PaymentContainer>
              <PaymentTypeButton
                title="Cartão de Crédito"
                type="credit"
                isActive={paymentType === 'credit'}
                onClick={() => setPaymentType('credit')}
              />
              <PaymentTypeButton
                title="Cartão de Débito"
                type="debit"
                isActive={paymentType === 'debit'}
                onClick={() => setPaymentType('debit')}
              />
              <PaymentTypeButton
                title="Dinheiro"
                type="cash"
                isActive={paymentType === 'cash'}
                onClick={() => setPaymentType('cash')}
              />
            </PaymentContainer>
          </CardForm>
        </ContainerForm>
      </FormProvider>
      <CartOrderCard submitForm={handleSubmit(confirmOrder)} />
    </Container>
  )
}
