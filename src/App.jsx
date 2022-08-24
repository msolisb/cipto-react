import { useState, useEffect } from 'react'

import styled from '@emotion/styled'

import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Loader from './components/Loader'

import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 5rem auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 50px auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const { moneda, criptoMoneda } = monedas

      const cotizarCripto = async () => {
        setResultado({})
        setSpinner(true)

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        //console.log(monedas)

        setResultado(resultado.DISPLAY[criptoMoneda][moneda])

        setSpinner(false)
      }
      cotizarCripto()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Imagen Cripto Monedas' />
      <div>
        <Heading>Cotiza CriptoMonedas al Instante</Heading>
        <Formulario setMonedas={setMonedas} />

        {spinner && <Loader />}

        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  )
}

export default App
