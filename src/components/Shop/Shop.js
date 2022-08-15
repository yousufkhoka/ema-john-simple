import React, { useState } from 'react';
import { useEffect } from 'react';
import './Shop.css';
import Product from '../product/product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/fakedb';
import {fakeData} from '../../fakeData/fakeData';


const Shop = () => {  
    const [product , setProducts] = useState([])
    const [cart , setCart] = useState([])
   useEffect(()=>{
    setProducts(fakeData.products.slice(0,10))
   },[])
   const hendleAddProduct = (product) => {
    console.log('hello world', product)
    const newCart = [...cart ,product]
    setCart(newCart)
    const sameProducts = newCart.filter(pd => pd.key === product.key)
    const count = sameProducts.length;
    addToDatabaseCart(product.key , count)
   }

    return (
         <div className='shop-container'>
           <div className="product-container">
          
            {
                product.map(pd => <Product 
                    key={pd.key}
                    showAddToCart={true}
                   product={pd}
                   hendleAddProduct={hendleAddProduct} 
                ></Product>)
            }
         
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>            
        </div>
    );
};

export default Shop;