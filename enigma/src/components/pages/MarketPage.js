import Header from '../layout/Header';
import Products from '../products/Products';

const MarketPage = () => {
    const databaseLink =
        'https://enigma-83e9e-default-rtdb.firebaseio.com/Market.json';

    const filters = ['All', 'Vegetables', 'Fruits', 'Dairy'];

    return (
        <div>
            <Header />
            <Products dbLink={databaseLink} filters={filters} />
        </div>
    );
};

export default MarketPage;
