import React from 'react';
import MovieForm from './MovieForm';
import axiosInstance from '../../config/axios';

export default class AddMoviePage extends React.Component {

    constructor(){
        super();
        this.state = {
            errors: []
        }
    }

    onSubmit = (movie, error) => {
        if(error){
            this.setState((prevState) => ({
                errors: [
                    ...prevState.errors,
                    error
                ]
            }))
        } else {
            axiosInstance.post('/movies', movie).then((res) => {
                if(res.status === 201){
                    this.setState(() => ({
                        errors: []
                    }))
                    this.props.history.push('/movies');
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
        return (
            <div>
                <h2>Add new movie</h2>
                {
                    this.state.errors.length > 0 && <p>{this.state.errors[this.state.errors.length-1]}</p>
                }
                <MovieForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}