import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import showingsReducer from '../reducers/showingsReducer';
import moviesReducer from '../reducers/moviesReducer';
import reservationsReducer from '../reducers/reservationsReducer';
import authReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            showings: showingsReducer,
            movies: moviesReducer,
            reservations: reservationsReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}