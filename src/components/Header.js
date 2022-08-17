import styled from "styled-components";
import cartIcon from "../images/cart_icon.png";

const CartHeader = styled.header`
  text-align:left;
  font-size: x-large;
  color: white;
  font-weight: bolder;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 5px 80px;
    align-items: center;
    background: #108dba;;
    box-shadow: 1px 1px 10px 1px #3faddf inset, 2px 2px 10px 3px #aaaaaa;
    @media (max-width: 600px){
        padding: 5px 30px;
    }
`;

const CartImage = styled.div`
    img{
        height: 70%;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <CartHeader>
                Cart Project
            </CartHeader>
            <CartImage>
                <img src={cartIcon} alt="Cart Icon" />
            </CartImage>
        </HeaderContainer>
    );
}

export default Header;