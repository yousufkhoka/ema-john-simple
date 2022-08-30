import React, { useState } from 'react';
import { useEffect } from 'react';
import './Shop.css';
import Product from '../product/product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/fakedb';
import {fakeData} from '../../fakeData/fakeData';
import { Link } from 'react-router-dom';


const Shop = () => {  
    const [product , setProducts] = useState([])
    const [cart , setCart] = useState([])
   useEffect(()=>{
    setProducts(fakeData.products.slice(50,60))
   },[])

console.log(product)
   useEffect(()=>{
    const savedCart = getDatabaseCart()
    // console.log(savedCart)
    const productKeys = Object.keys(savedCart) 
    // console.log(productKeys)
    const previousCart = productKeys.map(existionKey => {
console.log(savedCart[existionKey])
        const products = fakeData.products.find(pd => pd.key ===  existionKey )
        products.quantity = savedCart[existionKey]  
        return products;
    })
   setCart(previousCart)
    // console.log(previousCart)
   },[])


   const hendleAddProduct = (product) => { 
    const toBeAddedKey = product.key
    const sameProducts = cart.find(pd => pd.key === toBeAddedKey)
    let count = 1;
    let newCart;
    if(sameProducts){
        count = sameProducts.quantity + 1      
        sameProducts.quantity = count
        const others = cart.filter( pd =>pd.key === toBeAddedKey )
        newCart = [...others, sameProducts]
    }
    else{
        product.quantity =  1;
        newCart = [...cart, product]
    }
    setCart(newCart)
    addToDatabaseCart(toBeAddedKey , product.quantity)
   }
                                     
    return (
         <div className='tiwn-container'>
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
            <Cart cart={cart}>
            
            <Link to="/review">
            <button className='main-button'>process Order</button>
            </Link>
            
            </Cart>
            </div>            
        </div>
    );
};

export default Shop;