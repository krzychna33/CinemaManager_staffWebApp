import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startGetMovies} from '../actions/movies';
import MoviesList from './movies/MoviesList';

class MoviesDashboard extends React.Component {
    _isMounted = false;
    constructor(){
        super();
        this.state = {
            gotMovies: false
        }
    }

    componentDidMount(){
        this._isMounted = true;
        this.props.startGetMovies().then(() => {
            if(this._isMounted){
                this.setState(() => ({gotMovies: true}))
            }
        })
    }
    
    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){
        return(
            <div className="dashboard__wrapper">
                <Link to="/add-movie">Add Movie</Link>
                {this.state.gotMovies ? <MoviesList/> : <p>Loading</p>}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGetMovies: () => dispatch(startGetMovies())
    }
}

export default connect(undefined, mapDispatchToProps)(MoviesDashboard);