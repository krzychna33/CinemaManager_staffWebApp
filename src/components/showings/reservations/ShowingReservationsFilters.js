import React from 'react'
import { connect } from 'react-redux';
import {setEmailFilter} from '../../../actions/reservations';

class ShowingReservationsFilters extends React.Component {

    constructor(){
        super();
    }

    onEmailFilterChange = (e) => {
        const emailFilter = e.target.value;
        this.props.setEmailFilter(emailFilter);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Reservation's email" value={this.props.emailFilter} onChange={this.onEmailFilterChange}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        emailFilter: state.reservations.emailFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmailFilter: (emailFilter) => dispatch(setEmailFilter(emailFilter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowingReservationsFilters);