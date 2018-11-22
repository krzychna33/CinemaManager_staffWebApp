import React from 'react';
import {Link} from 'react-router-dom';

export default class ShowingReservationsItem extends React.Component {

    render(){
        return (
            <div>
                <h4>{this.props.reservation.email}</h4>
                <p>Row: <strong>{this.props.reservation.row}</strong></p>
                <p>Seat: <strong>{this.props.reservation.seat}</strong></p>
            </div>
        )
    }
}