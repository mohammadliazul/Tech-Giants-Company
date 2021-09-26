import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Body.css';

const Body = () => {
    const [cards, setCards] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('/techGiants.JSON')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])
    const handleAddToCart = card => {
        const newCart = [...cart, card];
        setCart(newCart);
    }
    return (
        <div className='container margin mt-4'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className="row">
                        {
                            cards.map(card =>
                                <Card key={card.name}
                                    card={card}
                                    handleAddToCart={handleAddToCart}></Card>)
                        }
                    </div>
                </div>
                <div className='col-md-3 mt-2'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};
export default Body;