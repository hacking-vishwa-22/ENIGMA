import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

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
                    <li>
                        {!isLoggedIn && (
                            <Link to='/auth' className={classes.badge}>
                                LOGIN
                            </Link>
                        )}
                    </li>
                    <li>
                        {isLoggedIn && (
                            <button
                                onClick={logoutHandler}
                                className={classes.logout}
                            >
                                <div>LOGOUT</div>
                            </button>
                        )}
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/market' className={classes.badge}>
                            MARKETPLACE
                        </Link>
                    </li>
                </ul>

                <HeaderCartButton onClick={props.onShowCart} />
            </header>
        </React.Fragment>
    );
};

export default Header;
