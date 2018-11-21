import React from 'react';
import {connect} from 'react-redux';
import MovieForm from './MovieForm';
import axiosInstance from '../../config/axios';

export default class EditMoviePage extends React.Component {

    constructor(){
        super();
        this.state = {
            errors: [],
            movie: {}
        }
    }

    componentDidMount(){
        axiosInstance.get(`/movies/${this.props.match.params.id}`).then((res) => {
            if(res.status === 200){
                this.setState(() => ({movie: res.data.data}))
            }
        })
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
            axiosInstance.patch(`/movies/${this.props.match.params.id}`, movie).then((res) => {
                if(res.status === 200){
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
                <h2>Edit movie</h2>
                {
                    this.state.movie.id ? (
                        <MovieForm movie={this.state.movie} onSubmit={this.onSubmit}/>
                    ) : (
                        <p>Loading...</p>
                    )
                }
                
            </div>
        )
    }

}

// const mapStateToProps = (state, props) => {
//     return {
//         movie: state.movies.find((movie) => {
//             return movie.id == props.match.params.id
//         }),
//     }
// }

// export default connect(mapStateToProps)(EditMoviePage);
