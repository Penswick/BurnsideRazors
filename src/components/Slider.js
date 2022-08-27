import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import { useState } from 'react'
import styled from "styled-components"
import { sliderItems } from '../data'

const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  color: white;
`

const Arrow = styled.div `
  width: 50px;
  height: 50px;
  background-color: #a80004;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
        &:hover {
        transition: all .15s ease-in-out;
        transform: scale(1.1);
        }
`


const Wrapper = styled.div `
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`

const ImgContainer = styled.div `
    height: 100%;
    flex: 1;
`

const Img = styled.img `
    height: 80%;
    width: 80%
`

const InfoContainer = styled.div `
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 4rem;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    color: white;
    font-size: 1.5rem;
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

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
        const HandleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

  return (
    <Container>
        <Arrow direction='left' onClick={()=>HandleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>(

                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Img src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            ))}
            </Wrapper>
        <Arrow direction='right' onClick={()=>HandleClick('right')}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider