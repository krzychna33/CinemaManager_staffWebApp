import React from 'react';
import { connect } from 'react-redux';
import ShowingReservationsItem from './ShowingReservationsItem';
import reservationSelector from '../../../selectors/reservations';

const ShowingReservationsList = (props) => (
    <div>
        <p>Movie: <strong>{props.reservations.movieTitle}</strong> at showing <strong>#{props.reservations.showingId}</strong></p>
        <p>Total reservations: <strong>{props.reservations.reservationsList.length}</strong> currently showing {props.reservationsList.lenght} for email <strong>{props.reservations.emailFilter ? props.reservations.emailFilter : 'Every email'}</strong></p>
        {
            props.reservationsList.map((reservation, i) => {
                return <ShowingReservationsItem key={i} reservation={reservation}/>
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        reservations: state.reservations,
        reservationsList: reservationSelector(state.reservations.reservationsList, state.reservations.emailFilter)
    }
}

export default connect(mapStateToProps)(ShowingReservationsList);