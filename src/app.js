import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startGetShowings} from './actions/showings';

const store = configureStore();
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const jsx = (
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <AppRouter/>
        </MuiPickersUtilsProvider>
    </Provider>
)

//test

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(startGetShowings()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})


