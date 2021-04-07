import React, {useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import { getBasketTotal } from './reducer'
import axios from './axios'
import CurrencyFormat from 'react-currency-format'
import './Payment.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Payment() {

    const history = useHistory()

    const[{basket, user}, dispatch] = useStateValue(); 

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")


    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState();

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // strip expects the total in a currencies subunits ie if working in dollars it expects cents
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();

    }, [basket])

    console.log('The secret is >>', clientSecret)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
            card: elements.getElement(CardElement)}
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }

    const handleChange = (e) =>{
        //Listen for changes in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                Checkout({<Link to={"/checkout"}>{basket?.length} items</Link>})
                </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 react Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                    
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                            <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct key={item.id} {...item}/>
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                       <form onSubmit={handleSubmit}>
                           <CardElement onChange={handleChange}/>
                           <div className='payment__priceContainer'>
                               <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeperator={true}
                                prefix={"$"} />

                                <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                           </div>
                            {error && <div>{error}</div>}
                       </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
