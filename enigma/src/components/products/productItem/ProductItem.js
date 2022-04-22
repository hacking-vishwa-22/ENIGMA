import { useContext } from 'react';
import ProductItemForm from './ProductItemForm';
import classes from './ProductItem.module.css';
import CartContext from '../../../store/cart-context';

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `₹${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={classes.product}>
            <div>
                <img src={props.image} className={classes.image}></img>
            </div>
            <div className={classes.content}>
                <h3>{props.name}</h3>
                <div className={classes.price}>{price}</div>
            </div>
            <div className={classes.form}>
                <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default ProductItem;
