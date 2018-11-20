import React from 'react';
import {connect} from 'react-redux';
import {startAddShowing} from '../../actions/showings';
import axiosInstance from '../../config/axios';
import ShowingForm from './ShowingForm';
import { startGetMovies } from '../../actions/movies';

export class AddShowingPage extends React.Component {
    constructor(){
        super();
        this.state = {
            error: '',
            moviesGot: false
        }
    }

    componentDidMount(){
        this.props.startGetMovies().then(() => {
            this.setState(() => ({moviesGot: true}))
        });
    }

    onSubmit = (showing) => {
        console.log(showing)
        axiosInstance.post('/showings', showing).then((res) => {
            if(res.status === 201){
                this.setState(() => ({
                    error: ''
                }))
                this.props.history.push('/');
            }
        }).catch((e) => {
            this.setState(() => ({
                error: 'An error occured while adding showing to the database.'
            }))
        })
    }

    render(){
        return(
            <div>
                <h1>Add new showing</h1>
                {this.state.error && <h3>{this.state.error}</h3>}
                {
                    this.state.moviesGot ? (
                        <ShowingForm movies={this.props.movies} onSubmit={this.onSubmit}/>
                    ) : (
                        <p>Loading</p>
                    )
                }

            </div>
        )
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        startAddShowing: (showing) => dispatch(startAddShowing(showing)),
        startGetMovies: () => dispatch(startGetMovies())
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(AddShowingPage)