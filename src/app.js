import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import jwt from 'jsonwebtoken';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startGetShowings} from './actions/showings';
import {setUser, startLogout} from './actions/auth';
import setAuthTokenHeader from './utils/setAuthTokenHeader';
import {key} from './config/jwt/public'

const store = configureStore();
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const jsx = (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <AppRouter/>
        </MuiPickersUtilsProvider>
    </Provider>
)

if(localStorage.jwtToken){
    jwt.verify(localStorage.jwtToken, key, (err, decoded) => {
        if(!err){
            setAuthTokenHeader(localStorage.jwtToken);
            store.dispatch(setUser(jwt.decode(localStorage.jwtToken)));
        } else {
            localStorage.removeItem('jwtToken');
            setAuthTokenHeader(false);
            store.dispatch(setUser());
        }
    });
    
}


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startGetShowings()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})


