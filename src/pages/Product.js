import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container=styled.div`
    color: white;
`

const Wrapper=styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer=styled.div`
    flex: 1;
    border: 1px solid white;
    border-radius: 10px;
    padding: 0px 50px;
`

const Image=styled.img`
    width: 100%;
    height: 70vh;
    object-fit: fit;
`

const InfoContainer=styled.div`
    flex: 1;
    margin: 20px 25px;
`

const Title=styled.h1`
    font-weight: 300;
`

const Description=styled.p`
    margin: 20px 0px;
`

const Price=styled.span`
    font-weight: 100;
    font-size: 2.3rem;
`

const AddContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
`

const AddButton=styled.button`
    border: solid 1px white;
    padding: 10px;
    color: white;
    background-color: #000000;
    font-color: grey;
    cursor: pointer;
    font-weight: 600;
    border-radius: 5px;
    &:hover {
        background-color: #a80004;
        transition: all .5s;
        transform: scale(1.1);
    }
`

const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src='./imgs/razor.png'/>
            </ImgContainer>
            <InfoContainer>
                <Title>R89 MÜHLE TRADITIONAL Chrome Safety Razor</Title>
                <Description>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Description>
                <Price>£25.99</Price>
                <AddContainer>
                    <AddButton>ADD TO BASKET</AddButton>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product