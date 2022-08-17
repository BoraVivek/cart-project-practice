import styled from "styled-components";
import Cart from "./Cart";
import Header from "./Header";

const AppWrapper = styled.div`
  background: #108dba;
`;

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Cart />
    </AppWrapper>
  );
}

export default App;
