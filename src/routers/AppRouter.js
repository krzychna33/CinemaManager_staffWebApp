import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import MoviesList from '../components/MoviesList';
import Dashboard from '../components/Dashboard';
import AddShowingPage from '../components/showings/AddShowingPage'
import EditShowingPage from '../components/showings/EditShowingPage'

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/movies" component={MoviesList}/>
                <Route path="/add-showing" component={AddShowingPage}/>
                <Route path="/edit-showing/:id" component={EditShowingPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;