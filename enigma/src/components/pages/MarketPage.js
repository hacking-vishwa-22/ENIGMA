import Header from '../layout/Header';
import Products from '../products/Products';

const MarketPage = () => {
    const databaseLink =
        'https://enigma-83e9e-default-rtdb.firebaseio.com/Products.json';

    return (
        <div>
            <Header />
            <Products dbLink={databaseLink} />
        </div>
    );
};

export default MarketPage;
