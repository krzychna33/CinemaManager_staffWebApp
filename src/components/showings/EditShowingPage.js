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
            error: ''
        }
    }

    componentDidMount(){
        this.props.startGetMovies().then(() => {
            this.setState(() => ({gotMovies: true}))
        })
    }

    onSubmit = (showing) => {
        axiosInstance.patch(`/showings/${this.props.match.params.id}`, showing).then((res) => {
            if(res.status === 200){
                this.setState(() => ({
                    error: ''
                }))
                this.props.history.push('/');
            }
        }).catch((e) => {
            this.setState(() => ({
                error: 'An error occured while editing showing in the database.'
            }))
        })
    }

    render(){
        console.log(this.props.showing)
        return(
            <div>
                {this.state.gotMovies ? (
                    <ShowingForm showing={this.props.showing} movies={this.props.movies} onSubmit={this.onSubmit}/>
                ) : (
                    <p>Loading</p>
                )}
                
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