import React, { useState } from 'react';
import Header from '../layout/Header';
import Products from '../products/Products';
import Cart from '../cart/Cart';
import CartProvider from '../../store/CartProvider';

function HomePage() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const databaseLink =
        'https://enigma-83e9e-default-rtdb.firebaseio.com/Products.json';

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Products dbLink={databaseLink} showProductsSummary />
            </main>
        </CartProvider>
    );
}

export default HomePage;
