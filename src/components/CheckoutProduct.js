import React, {forwardRef} from 'react';
import { useStateValue } from '../stateManagement/StateProvider';
import '../styles/CheckoutProduct.css';



const CheckoutProduct = forwardRef(({id, image, title, price, rating, hideButton}, ref) => {

    const [, dispatch] = useStateValue()
    
    const removeFromBasket = () => {

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }
    
    return (
        <div ref={ref} className='checkoutProduct'>
            <img className='checkoutProduct__image'
                 src={image}
                 alt=""
            />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))
                    }
                </div>

                {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}
            </div>
        </div>
    )
})

export default CheckoutProduct
