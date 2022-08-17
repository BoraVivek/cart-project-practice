import Header from "../components/Header"
import styled from "styled-components";
import Cart from "../components/Cart";

const Container = styled.div`
  /* background: #108dba; */
`;

function Home() {
    return (
        <Container>
            <Header />
            <Cart />
        </Container>
    );
}

export default Home;