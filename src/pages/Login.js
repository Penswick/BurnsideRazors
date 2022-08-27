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
    width: 25%;
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
    margin: 10px 0px; 
    padding: 10px;
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

    const Link = styled.a`
        font-size: 0.9rem;
        text-decoration: underline;
        cursor: pointer;
    `

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Log in to your account</Title>
            <Form>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Button>Log in</Button>
                <Link>Forgot your password?</Link>
                <Link>Sign up</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login