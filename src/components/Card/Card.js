import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, ceo, founded, founders, stockPrice, img } = props.card;
    return (
        <div className="col-md-4 my-3">
            <div className="card h-100">
                <div className="height">
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body cardColor h-200">
                    <h2 className="name">{name}</h2>
                    <h6>CEO: <i>{ceo}</i></h6>
                    <h6>Founded: {founded}</h6>
                    <h6>Founders: <i>{founders}</i></h6>
                    <h6>Stock Price: ${stockPrice}</h6>
                    <button onClick={() => props.handleAddToCart(props.card)} type="button" className="btn btn-outline-primary"><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};
export default Card;