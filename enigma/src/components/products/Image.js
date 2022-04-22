import productsImage from '../../components/assets/farms.png';
import classes from './Image.module.css';

const Image = () => {
    return (
        <div className={classes['main-image']}>
            <img src={productsImage} alt='A platform for farmers!' />
        </div>
    );
};

export default Image;
