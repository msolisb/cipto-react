import styled from '@emotion/styled'

const Contenedor = styled.div`
  color: #fff;
  margin-top: 40px;
  text-align: center;
  border: 2px solid #fff;
  box-shadow: 5px 5px 8px rgba(255, 255, 255, 0.3);
`

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
    text-decoration: underline;
  }
`

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 900;
  }
`

const Img = styled.img`
  display: block;
  width: 100px;
  margin: 20px auto 0 auto;
`

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    resultado
  return (
    <Contenedor>
      <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt='Imagen Cripto' />
      <Precio>
        El precio es de: <span>{PRICE}</span>{' '}
      </Precio>
      <Texto>
        Precio más alto del día: <span>{HIGHDAY}</span>{' '}
      </Texto>
      <Texto>
        Precio mas bajo del día: <span>{LOWDAY}</span>{' '}
      </Texto>
      <Texto>
        Variación en las últimas 24 horas: <span>{CHANGEPCT24HOUR} %</span>{' '}
      </Texto>
      <Texto>
        Última actualización: <span>{LASTUPDATE} </span>{' '}
      </Texto>
    </Contenedor>
  )
}

export default Resultado
