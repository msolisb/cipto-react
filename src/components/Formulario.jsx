import { useState, useEffect } from 'react'

import Error from './Error'

import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
  width: 100%;
  background-color: #9497ff;
  color: #fff;
  padding: 1rem;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #6469ff;
  }
`

const Formulario = ({ setMonedas }) => {
  //
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)
  const [criptoMoneda, SelectCriptoMoneda] = useSelectMonedas(
    'Elige tu Cripto Moneda',
    criptos
  )

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      //console.log(resultado.Data)

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objetoCripto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        }

        //console.log(objetoCripto)

        return objetoCripto
      })
      //console.log(arrayCriptos)
      setCriptos(arrayCriptos)

      //console.log(criptos)
    }
    consultarAPI()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([moneda, criptoMoneda].includes('')) {
      setError(true)
      return
    }
    setError(false)

    setMonedas({
      moneda,
      criptoMoneda,
    })
  }

  return (
    <>
      {error && <Error> Todos los Campos son Obligatorios </Error>}

      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMoneda />

        <InputSubmit type='submit' value='Cotizar' />
      </form>
    </>
  )
}

export default Formulario
