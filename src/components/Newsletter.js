import { LocalPostOfficeRounded } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div `
  height: 60vh;
  color: black;
  background-color: #FFFFF6;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1 `
  font-size: 4rem;
  margin-bottom: 20px;
`
const Description = styled.div `
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 20px;
`
const InputContainer = styled.div `
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`
const Input = styled.input `
  border: none;
  flex: 10;
  padding-left: 1.5rem;
  font-size: 1.2rem;
`
const Button = styled.button `
  flex: 2.5;
  border: none;
  color: white;
  display: flex;
  background-color: #a80004;
  align-items: center;
  justify-content: center;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Notifications</Title>
        <Description>Subscribe to our newsletter for exclusive offers and promotions</Description>
        <InputContainer>
            <Input placeholder='Your email....'/>
            <Button>
                <LocalPostOfficeRounded/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter