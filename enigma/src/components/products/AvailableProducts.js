import { useEffect, useState } from 'react';
import ProductItem from './productItem/ProductItem';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';

const AvailableProducts = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(
                'https://fresh-Products-prakalpshakya31-default-rtdb.firebaseio.com/Products.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedProducts = [];

            for (const key in responseData) {
                loadedProducts.push({
                    id: key,
                    name: responseData[key].name,
                    image: responseData[key].image,
                    price: responseData[key].price,
                    category: responseData[key].category,
                });
            }
            setProducts(loadedProducts);
            setAllProducts(loadedProducts);
            setIsLoading(false);
        };
        fetchProducts().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.ProductsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.ProductsError}>
                <p>{httpError}</p>
            </section>
        );
    }

    const filterItem = (categoryItem) => {
        const updatedItems = allProducts.filter((currElement) => {
            return (
                categoryItem === 'all' || currElement.category === categoryItem
            );
        });

        setProducts(updatedItems);
    };

    const productList = products.map((product) => (
        <ProductItem
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
        />
    ));

    return (
        <section className={classes.products}>
            <div className={classes.filters}>
                <button onClick={() => filterItem('all')}>All</button>
                <button onClick={() => filterItem('Farm Equipments')}>
                    Farm Equipments
                </button>
                <button onClick={() => filterItem('Fertilizers')}>
                    Fertilizers
                </button>
                <button onClick={() => filterItem('Pesticides')}>
                    Pesticides
                </button>
                <button onClick={() => filterItem('Seeds')}>Seeds</button>
            </div>
            <Card>
                <ul>{productsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableProducts;
