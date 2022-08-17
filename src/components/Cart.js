import { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartContainer = styled.div`
    background: #c1c1c1;
    padding: 20px 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 600px){
        padding: 20px 30px;
    }
`;

const CartInfo = styled.div`
    background: #4a4a4a;
    height: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    padding: 5px 30px;
    align-items: center;

    @media (max-width: 600px){
        flex-direction: column;
        justify-content: space-around;
    }
`;

const CheckoutButton = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 10px;
    background: #108dba;
    border: none;
    color: white;
    font-size: large;
    cursor: pointer;

    @media (max-width: 600px){
        width: 200px;
    }
    
`;

const DisabledCheckoutButton = styled.button`
    width: 300px;
    height: 40px;
    border-radius: 10px;
    background: #888989;
    border: none;
    color: white;
    font-size: large;
    cursor: not-allowed;

    @media (max-width: 600px){
        width: 200px;
    }
`;

const PurchasedInfo = styled.div`
    text-align: center;
    background: green;
    color: white;
    padding: 10px;
    border-radius: 10px;
`;

function Cart() {

    const [products, setProducts] = useState([
        {
            product_id: 1,
            title: 'iPhone 13',
            price: 125000,
            qty: 2,
            image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            product_id: 2,
            title: 'Macbook Pro',
            price: 235000,
            qty: 1,
            image: "https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]);

    const [isDisabled, setDisabled] = useState(false);
    const [isCheckedOut, setCheckedOut] = useState(false);

    let totalAmount = 0;
    products.forEach((product) => {
        totalAmount += Number(product.qty) * Number(product.price);
    })

    let totalProducts = 0;
    products.forEach((product) => {
        totalProducts += Number(product.qty);
    })


    useEffect(() => {
        if(totalAmount === 0){
            setDisabled(true);
        }else if(isDisabled === true){
            setDisabled(false);
        } 
    }, [products, totalAmount, isDisabled]);

    useEffect(() => {
        console.log(totalAmount);
    }, [totalAmount]);

    function handleIncreaseQuantity(productId) {
        let newProducts = products.map((product) => {
            if (product.product_id === productId) {
                product.qty = product.qty + 1;
            }
            return product;
        });
        setProducts(newProducts);
    }

    function handleDecreaseQuantity(productId) {
        let newProducts = products.map((product) => {
            if (product.product_id === productId) {
                if (product.qty === 0) {
                    return product;
                }
                product.qty = product.qty - 1;
            }
            return product;
        })
        setProducts(newProducts);
    }

    function checkoutOrder(){
        setCheckedOut(true);
        setProducts([]);
    }

    const purchased = 
    <PurchasedInfo>
        Purchased Products Successfully
    </PurchasedInfo>

    return (
        <CartContainer>
            {products.map((product) =>
                <CartItem product={product}
                    increaseQuantity={handleIncreaseQuantity}
                    decreaseQuantity={handleDecreaseQuantity}
                    key={product.product_id} />)
            }

            {isCheckedOut && purchased}

            <CartInfo>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span className="totalAmount" style={{ color: "white" }}>
                        Total Amount: {totalAmount.toLocaleString()}
                    </span>
                    <span className="totalProducts" style={{ color: "white" }}>
                        Total Products: {totalProducts}
                    </span>
                </div>
                {isDisabled ? <DisabledCheckoutButton disabled="disabled">Checkout</DisabledCheckoutButton> : <CheckoutButton onClick={checkoutOrder}>Checkout</CheckoutButton>}
            </CartInfo>
        </CartContainer>
    );
}

export default Cart;