import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`
    color: black;
` 

const Title = styled.h1`
    margin: 20px;
    color: white;

`

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

`

const ItmFilter = styled.div`
    margin: 20px;
    color: white;

`

const ItmFilterText = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Safety Razors</Title>
            <FilterContainer>
                <ItmFilter>
                    <ItmFilterText>Safety Razors</ItmFilterText>
                    <Select>
                        <Option disabled selected>
                            Brand
                        </Option>
                        <Option>MUHLE</Option>
                        <Option>Gillette</Option>
                        <Option>Edwin Jagger</Option>
                        <Option>Merkur</Option>
                        <Option>VIKINGS</Option>
                        <Option>Weishi</Option>
                    </Select>
                </ItmFilter>
                <ItmFilter>
                    <ItmFilterText>Sort by:</ItmFilterText>
                    <Select>
                        <Option disabled selected>
                            Featured
                        </Option>
                        <Option>Price: Low to High</Option>
                        <Option>Price: High to Low</Option>
                    </Select>
                </ItmFilter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
    </Container>
  )
}

export default ProductList