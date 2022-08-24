import { useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  display: block;
  color: #fff;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
`

const useSelectMonedas = (label, opciones) => {
  //
  const [state, setState] = useState('')

  const SelectMonedas = () => (
    <>
      <Label htmlFor='monedas'>{label}</Label>
      <Select
        id='monedas'
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value=''> ---Selecciones una Opción--- </option>

        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  )

  return [state, SelectMonedas]
}

export default useSelectMonedas
