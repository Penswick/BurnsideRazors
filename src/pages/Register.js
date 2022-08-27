import styled from "styled-components"

const Container = styled.div`
    background: url('./imgs/bathroombg.png') center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    border: none;
    border-radius: 10px;
`
const Title = styled.h1`
    font-size: 2rem;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 10px 0px 0px; 
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 0.8rem;
    margin: 20px 0px;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    color: white;
    background-color: #000000;
    font-color: grey;
    cursor: pointer;
    font-weight: 600;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 50%;
    &:hover {
        color: #04f72f;
        transition: all .5s;
    }
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input placeholder="First name"/>
                <Input placeholder="Last name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm password"/>
                <Agreement>
                    By creating an account with BURNSIDE razors, I confirm that I have read and agree to the <b>Terms of Service</b> and <b>Privacy Policy</b>.
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register