import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
    };

    return (
        <React.Fragment>
            <header className={classes.header}>
                <Link to='/'>
                    <div className={classes.logo}>Krishi Vyapar</div>
                </Link>
                <ul>
                    <li>{!isLoggedIn && <Link to='/auth'>Login</Link>}</li>
                    <li>
                        {isLoggedIn && (
                            <button
                                onClick={logoutHandler}
                                className={classes.logout}
                            >
                                <div>Logout</div>
                            </button>
                        )}
                    </li>
                </ul>

                <HeaderCartButton onClick={props.onShowCart} />
            </header>
        </React.Fragment>
    );
};

export default Header;
