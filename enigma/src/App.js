import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AuthPage from './components/pages/AuthPage';
import AuthContext from './store/auth-context';

const App = () => {
    const authCtx = useContext(AuthContext);

    return (
        <Switch>
            <Route path='/' exact>
                <HomePage />
            </Route>
            {!authCtx.isLoggedIn && (
                <Route path='/auth'>
                    <AuthPage />
                </Route>
            )}
            <Route path='*'>
                <Redirect to='/' />
            </Route>
        </Switch>
    );
};

export default App;
