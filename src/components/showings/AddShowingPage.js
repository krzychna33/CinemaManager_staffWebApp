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
            errors: [],
            moviesGot: false
        }
    }

    componentDidMount(){
        this.props.startGetMovies().then(() => {
            this.setState(() => ({moviesGot: true}))
        });
    }

    onSubmit = (showing, error) => {
        
        if(error && !showing){
            this.setState((prevState) => ({
                errors: [
                    ...prevState.errors,
                    error
                ]
            }))
        } else {
            axiosInstance.post('/showings', showing).then((res) => {
                if(res.status === 201){
                    this.setState(() => ({
                        errors: []
                    }))
                    this.props.history.push('/');
                }
            }).catch((e) => {
                this.setState((prevState) => ({
                    errors: [
                        ...prevState.errors,
                        e.response.data.message
                    ]
                }))
            })
        }

    }

    render(){
        return(
            <div>
                <h2>Add new showing</h2>
                {
                    this.state.errors.length > 0 && <p>{this.state.errors[this.state.errors.length-1]}</p>
                }
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