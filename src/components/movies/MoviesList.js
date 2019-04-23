import React from 'react';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';

const MoviesList = (props) => (
    <div className="moviesList">
        <h2>Movies list: </h2>
           <div>
                {
                    props.movies.map((movie) => {
                        return <MovieItem key={movie.id} movie={movie}/>
                    })
                }
            </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MoviesList);