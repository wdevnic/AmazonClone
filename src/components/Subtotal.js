import React from 'react';
import {useHistory} from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../stateManagement/StateProvider";
import {getBasketTotal} from "../stateManagement/reducer";
import '../styles/Subtotal.css';



function Subtotal() {

    const history = useHistory();
    const [{basket}] = useStateValue();


    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>Subtotal ({basket?.length} items) : <strong>{value}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift 
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                fixedDecimalScale={true}
                prefix={"$"} />
                
                <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
