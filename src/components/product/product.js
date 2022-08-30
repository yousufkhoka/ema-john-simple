import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';




const product = (props) => {
    const {img , name,seller,price,stock ,key,category } = props.product
    return (
        <div className='pruduct'> 
           <div className="product-img">
            <img src={img} alt="" />
          </div>
           <div className="product-dettels">
             <h3><Link to={"/product/"+key}>{name}</Link></h3>
             <h5>by: {seller}</h5>
             <h4>${price}</h4>
             <h5>category {category}</h5>
             <p>only {stock} left in stock- order soon! </p>
             
             { props.showAddToCart && <button
             className='main-button'
               onClick={ () => props.hendleAddProduct(props.product)}>
                <FontAwesomeIcon icon={ faCartShopping} /> 
                 add to crat
               </button>}
           </div>

        </div>
      
    );
};

export default product;