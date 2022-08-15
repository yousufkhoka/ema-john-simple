import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/fakedb';
import {fakeData} from '../../fakeData/fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart , setCart] = useState([])
    
    useEffect(()=>{
      const savedCart =  getDatabaseCart()
      const productKeys = Object.keys(savedCart)
      const cartProduct = productKeys.map(key => {
      const products = fakeData.products.find(pd => pd.key === key)
      products.quantity = savedCart[key]
      return products
      })
      setCart(cartProduct)      
    },[])
    const removeProduct = (productkey) => {
       
       setCart(cart.filter(p => p.key !== productkey))
      removeFromDatabaseCart(productkey)      
    }
    return (
        <div>
              <h1> this is review: {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem 
                    key={pd.key} products={pd}
                    removeProduct={removeProduct}
                ></ReviewItem>)
            }
            
            
        </div>
    );
};

export default Review;