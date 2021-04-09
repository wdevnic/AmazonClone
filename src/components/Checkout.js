import React from 'react';
import FlipMove from 'react-flip-move';
import { useStateValue } from '../stateManagement/StateProvider';
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';



function Checkout() {

    const[{basket, user}] = useStateValue()



    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Books/XCM_Manual_1316019_1624933_CA_ca_q1_studio_tiles_ca_en_2_3752315_1500x70_en_CA.jpg" 
                    alt="" 
                />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
                <FlipMove>
                    {basket.map((product) => <CheckoutProduct key={product.id} {...product} />)}
                </FlipMove>

            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
