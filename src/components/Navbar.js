import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

// backticks, not quotes, stop forgetting. Just below the esc key
const Container = styled.div ` 
    height: 60px;
`

const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftNav = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span `
    font-size: .9rem;
    cursor: pointer;
    color: white;
`
const SearchContainer = styled.div `
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 5px;
`

const Input = styled.input ` /*  */
    border: none;
`

const CenterNav = styled.div `
    flex: 1;
    text-align: center;

`
const Logo = styled.h1 `
    font-weight: bold;
    color: white;
    height: 40px;
    font-size: 1.5rem;
    margin: 0px 15px 0px;
    cursor: pointer;
`

const RightNav = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
`

const MenuItem = styled.div`
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
    margin-right: 20px;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <LeftNav>
                <Language>EN</Language>
                <SearchContainer>
                    <Input  label='search' />
                    <Search style={{color:"gray"}}/>
                </SearchContainer>
            </LeftNav>
            <CenterNav>
                <Logo>
                    BURNSIDE
                </Logo>
            </CenterNav>
            <RightNav>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>
                    <Badge badgeContent={0} color="secondary">
                    <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </RightNav>
        </Wrapper>
    </Container>
  )
}

export default Navbar