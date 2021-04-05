import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider"


function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    const sum= () => {
        let sum = 0;
        basket.forEach(item => {
            sum += parseFloat(item.price)
        });
        return sum;
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>Subtotal ({basket?.length} items) : <strong>{` ${value} `}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift 
                    </small>
                    </>
                )}
                decimalScale={2}
                value={sum()}
                displayType={"text"}
                thousandSeperator={true}
                fixedDecimalScale={true}
                prefix={"$"} />
                
                <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
