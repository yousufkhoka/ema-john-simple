import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
   const {name,quantity,key,price } = props.products
   
    return (
        <div className="review-item">
          
           <h4 className='products-name'>{name}</h4>
           <p>quantity : {quantity}</p>
           <p>$ {price}</p>
           <button
            className='main-button'
           onClick={() => props.removeProduct(key)}
           >remove</button>
        </div>
    );
};

export default ReviewItem;