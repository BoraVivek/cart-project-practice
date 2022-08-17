import styled from "styled-components";

const ItemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const ImageContainer = styled.img`
    width: 100px;
    height: 100px;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    gap: 10px;
`;

const ItemTitle = styled.span`
    font-size  : x-large;
    font-weight: bold;
    color: #454343;
`;

const QuantityControls = styled.div`
    display: flex;
    gap: 5px;

    button{
        cursor: pointer;
    }
`;

function CartItem({product, decreaseQuantity, increaseQuantity}){
    return(
        <ItemContainer>
            
            <ImageContainer src={product.image} alt={product.title} />
            
            <ItemInfo>
                <ItemTitle>{product.title}</ItemTitle>
                <span className="price">₹{product.price.toLocaleString('en')}</span>
                <QuantityControls>
                    <button onClick={() => decreaseQuantity(product.product_id)}>-</button>
                    <span className="qty">{product.qty}</span>
                    <button onClick={() => increaseQuantity(product.product_id)}>+</button>
                </QuantityControls>
            </ItemInfo>
        </ItemContainer>
    );
}

export default CartItem;