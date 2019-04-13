import React from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from '../../config/axios';
import {connect} from 'react-redux';
import moment from 'moment'
import numeral from 'numeral'
import {startGetShowings} from '../../actions/showings';

export class ShowingItem extends React.Component {

    onRemoveButtonClick = () => {
        axiosInstance.delete(`showings/${this.props.showing.id}`).then((res) => {
            if(res.status == 200){
                this.props.startGetShowings();
            }
        })
    }

    render(){
        return (
            <div className="showingItem__wrapper">
                <div className="showingItem__upperBar">
                    <h3>{this.props.showing.movieTitle}</h3>
                    <p>ID: {this.props.showing.id}</p>
                </div>
                <p>{moment(this.props.showing.showingTime).format("dddd, MMMM Do YYYY, HH:mm")}</p>
                <p>Price: {numeral(this.props.showing.price/100).format('$0,0.00')}</p>
                <div className="showingItem__activityStatus">
                    Active: {
                        this.props.showing.active == 1 ? <i className="material-icons showingItem__active">check_circle_outline</i> : <i className="material-icons showingItem__inactive">highlight_off</i>
                    }
                </div>
                <div className="showingItem__buttonsBox">
                    <Link to={`/edit-showing/${this.props.showing.id}`}><button className="btn btn-primary showingItem__button">Edit</button></Link>
                    <Link to={`/show-reservations/${this.props.showing.id}`}><button className="btn btn-primary showingItem__button">Show reservations</button></Link>
                    <button onClick={this.onRemoveButtonClick} className="btn btn-danger showingItem__button">Remove</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startGetShowings: () => dispatch(startGetShowings())
    }
}

export default connect(undefined, mapDispatchToProps)(ShowingItem);