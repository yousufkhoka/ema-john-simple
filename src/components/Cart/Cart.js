import React from 'react';

const Cart = (props) => {
    const cart = props.cart

    const total = cart.reduce((total , prd) => total + prd.price , 0)
     let shipingCost = 0
    if( total > 50 ){
         shipingCost = 0;
    }
    else if(total > 20){
         shipingCost = 7.99;
    }
    else if(total > 0){
        shipingCost = 12.99;
    }
    const tex = total / 10;

    const formetNumber = (num) => {
        const precision = num.toFixed(2)
        return Number(precision)
    }

    
    
    const totalPrice = total + shipingCost + tex
    return (
        <div>
           <h2>Order Summary</h2>
            <h3>Items Ordered: {cart.length} </h3>
            <p>product price:{formetNumber(total)}</p>
            <p>shiping cost: {shipingCost} </p>
            <p>tex / vat : {formetNumber(tex)} </p>
            <h2>total price :{formetNumber(totalPrice)}</h2>
        </div>
    );
};

export default Cart;