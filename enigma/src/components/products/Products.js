import { React } from 'react';
import Image from './Image';
import ProductsSummary from './ProductsSummary';
import AvailableProducts from './AvailableProducts';

const Products = (props) => {
    return (
        <div>
            <Image />
            {props.showProductsSummary && <ProductsSummary />}
            <AvailableProducts dbLink={props.dbLink} />
        </div>
    );
};

export default Products;
