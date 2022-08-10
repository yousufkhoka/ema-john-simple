import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'




const product = (props) => {
    const {img , name,seller,price,stock } = props.product
    return (
        <div className='pruduct'> 
           <div className="product-img">
            <img src={img} alt="" />
           </div>
           <div className="product-dettels">
             <h3>{name}</h3>
             <h5>by: {seller}</h5>
             <h4>${price}</h4>
             <p>only {stock} left in stock- order soon! </p>
              <button onClick={ () => props.hendleAddProduct(props.product)}><FontAwesomeIcon icon={ faCartShopping} />  add to crat</button>

           </div>

        </div>
      
    );
};

export default product;