import React from 'react';
import {connect} from 'react-redux';
import {startGetMovies} from '../actions/movies';
import axiosInstance from '../config/axios';
import ShowingForm from './ShowingForm';

export default class AddShowingPage extends React.Component {
    constructor(props){
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        axiosInstance.get('movies').then((res) => {
            this.setState({
                movies: res.data
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Add new showing</h1>
                <ShowingForm movies={this.state.movies}/>
            </div>
        )
    }
}

// const mapDisptachToProps = (dispatch) => {
//     return {
//         startGetMovies: dispatch(startGetMovies())
//     }
// }

// export default connect(undefined, mapDisptachToProps)(AddShowingPage)