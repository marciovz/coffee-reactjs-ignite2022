import { Input } from '../Input'

import { Form, LineForm } from './styles'

export function AddressForm() {
  return (
    <Form>
      <LineForm cols="13rem 1fr">
        <Input name="cep" placeholder="CEP" />
      </LineForm>

      <LineForm>
        <Input name="street" placeholder="Rua" />
      </LineForm>

      <LineForm cols="13rem 1fr">
        <Input name="number" placeholder="Número" />
        <Input name="complement" placeholder="Complemento" opcional />
      </LineForm>

      <LineForm cols="13rem 1fr 4rem">
        <Input name="district" placeholder="Bairro" />
        <Input name="city" placeholder="Cidade" />
        <Input name="uf" placeholder="UF" />
      </LineForm>
    </Form>
  )
}
