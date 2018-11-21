import React from 'react';
import {connect} from 'react-redux';
import MovieItem from './MovieItem';

const MoviesList = (props) => (
    <div>
        <h4>Movies list: </h4>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.movies.map((movie) => {
                        return <MovieItem key={movie.id} movie={movie}/>
                    })
                }
            </tbody>
        </table>
    </div>
);

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MoviesList);