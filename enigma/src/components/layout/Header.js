import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <Link to='/'>
                    <div className={classes.logo}>Krishi Vyapar</div>
                </Link>
            </header>
        </React.Fragment>
    );
};

export default Header;
