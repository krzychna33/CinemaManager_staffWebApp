import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

class Header extends React.Component {

    logout = () => {
        this.props.startLogout().then(() => {

        })
    }

    render(){
        return (
            <div>
                <h1>CinemaStaff</h1>
                <NavLink to="/dashboard" activeClassName="activeLink" exact={true}>Showings</NavLink>
                <NavLink to="/movies" activeClassName="activeLink">Movies</NavLink>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Header);