import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axiosInstance from '../../config/axios'
import {startGetMovies} from '../../actions/movies';

export class MovieItem extends React.Component {

    onRemoveButtonClick = () => {
        axiosInstance.delete(`movies/${this.props.movie.id}`).then((res) => {
            if(res.status == 200){
                this.props.startGetMovies();
            }
        })
    }

    render(){
        return(
            <div className="movieItem__wrapper">
                <div className="movieItem__upperBar">
                    <h3>{this.props.movie.title}</h3>
                    <p>ID: {this.props.movie.id}</p>
                </div>
                <p>{this.props.movie.year}</p>
                <div className="movieItem__buttonsBox">
                    <Link to={`/edit-movie/${this.props.movie.id}`}><button className="btn btn-primary movieItem__button">Edit</button></Link>
                    <button onClick={this.onRemoveButtonClick} className="btn btn-danger movieItem__button">Remove</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGetMovies: () => dispatch(startGetMovies())
    }
}

export default connect(undefined, mapDispatchToProps)(MovieItem);