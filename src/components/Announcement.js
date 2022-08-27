import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #a80004;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .9rem;
    font-weight: 600;
    cursor: pointer;
    position: sticky;
`

const Announcement = () => {
  return (
    <Container>
        Don't miss out! Free shipping on all orders over £30
    </Container>
  )
}

export default Announcement