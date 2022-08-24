import styled from '@emotion/styled'

const ErrorMsg = styled.div`
  background-color: #b7322c;
  color: #fff;
  margin-bottom: 16px;
  padding: 16px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`

const Error = ({ children }) => {
  return <ErrorMsg>{children}</ErrorMsg>
}

export default Error
