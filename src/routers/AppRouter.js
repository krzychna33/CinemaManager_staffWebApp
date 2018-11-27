import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import MoviesDashboard from '../components/MoviesDashboard';
import Dashboard from '../components/Dashboard';
import AddShowingPage from '../components/showings/AddShowingPage';
import EditShowingPage from '../components/showings/EditShowingPage';
import AddMoviePage from '../components/movies/AddMoviePage';
import EditMoviePage from '../components/movies/EditMoviePage';
import ShowingReservationsPage from '../components/showings/reservations/ShowingReservationsPage';
import LoginPage from '../components/auth/LoginPage';
import requireAuth from '../routers/requireAuth';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path="/dashboard" component={requireAuth(Dashboard)}/>
                <Route path="/movies" component={requireAuth(MoviesDashboard)}/>
                <Route path="/add-showing" component={requireAuth(AddShowingPage)}/>
                <Route path="/edit-showing/:id" component={requireAuth(EditShowingPage)}/>
                <Route path="/show-reservations/:id" component={requireAuth(ShowingReservationsPage)}/>
                <Route path="/add-movie" component={requireAuth(AddMoviePage)}/>
                <Route path="/edit-movie/:id" component={requireAuth(EditMoviePage)}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;