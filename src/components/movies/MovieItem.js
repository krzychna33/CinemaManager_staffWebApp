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
            <tr>
                <td>{this.props.movie.id}</td>
                <td>{this.props.movie.title}</td>
                <td>{this.props.movie.year}</td>
                <td>
                    <Link to={`/edit-movie/${this.props.movie.id}`}><button>Edit</button></Link>
                </td>
                <td>
                    <button onClick={this.onRemoveButtonClick}>Remove</button>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGetMovies: () => dispatch(startGetMovies())
    }
}

export default connect(undefined, mapDispatchToProps)(MovieItem);