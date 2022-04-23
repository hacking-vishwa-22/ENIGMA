import classes from './ProductsSummary.module.css';

const ProductsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>A platform for farmers and farm products!</h2>
            <p>
                We provide a platform for small-scale and marginalized farmers
                to directly buy their agro-requirements from large retailers and
                traders at relatively cheaper prices and also to sell their
                products to consumers through our platform eliminating middlemen
                culture and to increase their profit share.
            </p>
            <p>
                Small scale farmers comprise more than 70% of total farmers in
                India and Krishi Vyapar focuses on welfare of these marginalized
                sections.
            </p>
        </section>
    );
};

export default ProductsSummary;
