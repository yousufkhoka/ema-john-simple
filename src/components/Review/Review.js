import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/fakedb';
import {fakeData} from '../../fakeData/fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'
import { Link } from 'react-router-dom';

const Review = () => {
    const [cart , setCart] = useState([])
    console.log(cart)
    const [placeOrder , setPlaceOrder] = useState(false)
      
   const hendlelPlaceOrder =()=>{
    setCart([])
    processOrder()
    setPlaceOrder(true)

   }

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

    let thankyou;
    if(placeOrder){
        thankyou = <img src={happyImage} alt="" />
    }

    return (
        <div className="tiwn-container">
            <div className="product-container">
            {
                cart.map(pd => <ReviewItem 
                    key={pd.key} products={pd}
                    removeProduct={removeProduct}
                ></ReviewItem>)
            }
            {
                thankyou
            }
            </div>
             <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/shipment'>
                    <button onClick={hendlelPlaceOrder} className='main-button'>procced Chickout</button>
                    </Link>
                    
                </Cart>
             </div>
            
            
            
        </div>
    );
};

export default Review;