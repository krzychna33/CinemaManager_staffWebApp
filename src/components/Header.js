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
            <div className="header__bar">
                <div className="header__innerBar">
                    <h1 className="header__title">CinemaStaff</h1>
                    <NavLink to="/dashboard" activeClassName="activeLink" exact={true} className="link">Showings</NavLink>
                    <NavLink to="/movies" activeClassName="activeLink" className="link header__link">Movies</NavLink>
                </div>
                <button onClick={this.logout} className="header__logout">Logout</button>
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