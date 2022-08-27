import { Search, FavoriteBorder, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Icon = styled.div`
  visibility: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 300px 10px 10px;
  transition: all 0.5s ease;
  &:hover {
    ${'' /* visibility: visible; */}
    transform: scale(1.15);
    background-color: #a80004;
    color: white;
  }
`

const Image = styled.img`
  height: 75%;
  z-index: 2;
  opacity: 0.9;

`

const Container = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  flex: 1;
  margin: 10px;
  min-width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b1b1b;
  ${'' /* background-color: white; */}
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
  &:hover ${Icon}{
    visibility: visible;
  }
  &:hover ${Image}{
      transition: all 0.5s ease-in-out;
      transform: scale(1.2);
      opacity: 1;
    }
`

const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #8a8a8a;
  position: absolute;
`





const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <Search/>
          </Icon>
          <Icon>
            <FavoriteBorder/>
          </Icon>
          </Info>
    </Container>
  )
}


export default Product