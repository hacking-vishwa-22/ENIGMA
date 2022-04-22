import ProductItemForm from './ProductItemForm';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const price = `₹${props.price.toFixed(2)}`;

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
                <ProductItemForm id={props.id} />
            </div>
        </li>
    );
};

export default ProductItem;
