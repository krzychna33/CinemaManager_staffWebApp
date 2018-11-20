import React from 'react';
import {connect} from 'react-redux';
import {startAddShowing} from '../actions/showings';
import axiosInstance from '../config/axios';
import ShowingForm from './ShowingForm';

export class AddShowingPage extends React.Component {
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

    onSubmit = (showing) => {
        this.props.startAddShowing(showing).then(() => {
            console.log('Success!');
            this.props.history.push('/');
        }).catch(() => {
            console.log('Error while adding to the db')
        })
    }

    render(){
        return(
            <div>
                <h1>Add new showing</h1>
                <ShowingForm movies={this.state.movies} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        startAddShowing: (showing) => dispatch(startAddShowing(showing))
    }
}

export default connect(undefined, mapDisptachToProps)(AddShowingPage)