import React from 'react';
import ShowingForm from './ShowingForm';
import {connect} from 'react-redux';
import {startGetMovies} from '../../actions/movies';
import axiosInstance from '../../config/axios';

export class EditShowingPage extends React.Component {
    constructor(){
        super();
        this.state = {
            gotMovies: false,
            errors: []
        }
    }

    componentDidMount(){
        this.props.startGetMovies().then(() => {
            this.setState(() => ({gotMovies: true}))
        })
    }

    onSubmit = (showing, error) => {
        if(error){
            this.setState((prevState) => ({
                errors: [
                    ...prevState.errors,
                    error
                ]
            }))
        } else {
            axiosInstance.patch(`/showings/${this.props.match.params.id}`, showing).then((res) => {
                if(res.status === 200){
                    this.setState(() => ({
                        errors: []
                    }))
                    this.props.history.push('/dashboard');
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
                <h2>Edit showing</h2>
                {
                    this.state.errors.length > 0 && <p>{this.state.errors[this.state.errors.length-1]}</p>
                }
                {
                    this.state.gotMovies ? (
                        <ShowingForm showing={this.props.showing} movies={this.props.movies} onSubmit={this.onSubmit}/>
                    ) : (
                        <p>Loading</p>
                    )
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        showing: state.showings.find((showing) => {
            return showing.id == props.match.params.id;
        }),
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGetMovies: () => dispatch(startGetMovies())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditShowingPage);