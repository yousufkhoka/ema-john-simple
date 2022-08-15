import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../product/product';
import {fakeData} from '../../fakeData/fakeData';


const ProductDetail = () => {
    const {productKey} = useParams()
   const product = fakeData.products.find(pd => pd.key === productKey )
    return (
        <div>
            <h2>your product detalis </h2>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;