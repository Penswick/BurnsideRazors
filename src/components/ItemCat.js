import styled from "styled-components"
const Container = styled.div `
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    background-color: #1b1b1b;

`
const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div `        
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent); /*This adds the black background to the image*/
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1 `
    color: white;
    margin-top: 20px;
    margin-bottom: 10px;
        -webkit-text-stroke-width: 0.5px; /* Experimental, maybe remove later. */
        -webkit-text-stroke-color: black;
`
const Button = styled.button `
    border: none;
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

const ItemCat = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
    </Container>
  )
}

export default ItemCat