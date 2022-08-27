import { Facebook, Instagram, LinkedIn, LocalPostOfficeRounded, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    color: white;
`
const FootLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const FootMiddle = styled.div`
    flex: 1;
    padding: 20px;

`
const FootRight = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
`

const ListItem = styled.li`
    margin-bottom: 10px;
`

const Logo = styled.h1``

const Description = styled.p`
    margin: 20px 0px;
`

const SocmediaContainer = styled.div`
    display: flex;

`
const SocialmedIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:10px;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;
`
const ContactItem = styled.div`
    display: flex;
    justify-content: center;
`

const Footer = () => {
  return (
    <Container>
        <FootLeft>
            <Logo>BURNSIDE</Logo>
            <Description> Tag us on social media </Description>
            <SocmediaContainer>
                <SocialmedIcon color='1D9BF0'>
                    <Twitter/>
                </SocialmedIcon>
                <SocialmedIcon color='4267B2'>
                    <Facebook/>
                </SocialmedIcon>
                <SocialmedIcon color='bc1888'>
                    <Instagram/>
                </SocialmedIcon>               
                <SocialmedIcon color='0A66C2'>
                    <LinkedIn/>
                </SocialmedIcon>
            </SocmediaContainer>
        </FootLeft>
        <FootMiddle>
            <Title>Useful resources</Title>
            <List>
                <ListItem><a href="https://www.youtube.com/watch?v=ps88RU_BXlA">Where to begin</a></ListItem>
                <ListItem><a href="https://upcirclebeauty.com/blogs/upcircle/benefits-of-using-a-safety-razor">Why a safety razor</a></ListItem>
                <ListItem><a href="https://www.youtube.com/watch?v=Rj16M3Rc0pY">How to lather properly</a></ListItem>
            </List>
        </FootMiddle>
        <FootRight>
            <Title>Contact me</Title>
            <ContactItem> <LocalPostOfficeRounded/> Matthewpen96@gmail.com</ContactItem>
            <ContactItem><a href="https://www.linkedin.com/in/matthew-p-a8a61287/">LinkedIn</a></ContactItem>
        </FootRight>
    </Container>
  )
}

export default Footer