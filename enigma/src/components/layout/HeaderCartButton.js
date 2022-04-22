import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ''
    }`;

    return (
        <button className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{}</span>
        </button>
    );
};

export default HeaderCartButton;
