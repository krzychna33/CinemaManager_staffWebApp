import React from 'react';
import {connect} from 'react-redux';
import axiosInstance from '../../../config/axios';
import {startGetReservations} from '../../../actions/reservations';
import ShowingReservationsList from './ShowingReservationsList';   
import ShowingReservationsFilters from './ShowingReservationsFilters';

class ShowingReservationsPage extends React.Component {
    _isMounted = false;

    constructor(){
        super();
        this.state = {
            gotReservations: false
        }
    }

    componentDidMount(){
        this._isMounted = true;
        this.props.startGetReservations().then(() => {
            if(this._isMounted){
                this.setState(() => ({gotReservations: true}))
            }
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){
        return (
            <div>
                <ShowingReservationsFilters/>
                {
                    this.state.gotReservations ? <ShowingReservationsList/> : <p>Loading...</p>
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startGetReservations: () => dispatch(startGetReservations(props.match.params.id))
    }
}

export default connect(undefined, mapDispatchToProps)(ShowingReservationsPage)