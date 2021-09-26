import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const card of cart) {
        total = total + card.stockPrice;
    }
    return (
        <div className='cardColor my-2 px-1 h-100 border border-radius'>
            <h1 className='item-color'>Order Summary</h1>
            <h5>Items Ordered: {props.cart.length}</h5>
            <h5>Total: ${total.toFixed(2)}</h5>
            <h1 className='item-color'>Order Items:</h1>
            {
                props.cart.map(card => (<div key={card.ceo}>
                    <h5>{card.name}</h5>
                </div>))
            }
        </div>
    );
};
export default Cart;