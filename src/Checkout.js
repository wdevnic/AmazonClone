import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"
import CheckoutProduct from './CheckoutProduct'



function Checkout() {

    const[{basket}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Books/XCM_Manual_1316019_1624933_CA_ca_q1_studio_tiles_ca_en_2_3752315_1500x70_en_CA.jpg" 
                    alt="" 
                />

                {basket.map((product) => <CheckoutProduct {...product} />)}

                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
