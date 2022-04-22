import { React } from 'react';
import Image from './Image';
import ProductsSummary from './ProductsSummary';
import AvailableProducts from './AvailableProducts';

const Products = () => {
    return (
        <div>
            <Image />
            <ProductsSummary />
            <AvailableProducts />
        </div>
    );
};

export default Products;
