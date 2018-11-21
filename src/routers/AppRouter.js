import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import MoviesDashboard from '../components/MoviesDashboard';
import Dashboard from '../components/Dashboard';
import AddShowingPage from '../components/showings/AddShowingPage';
import EditShowingPage from '../components/showings/EditShowingPage';
import AddMoviePage from '../components/movies/AddMoviePage';
import EditMoviePage from '../components/movies/EditMoviePage';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/movies" component={MoviesDashboard}/>
                <Route path="/add-showing" component={AddShowingPage}/>
                <Route path="/edit-showing/:id" component={EditShowingPage}/>
                <Route path="/add-movie" component={AddMoviePage}/>
                <Route path="/edit-movie/:id" component={EditMoviePage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;