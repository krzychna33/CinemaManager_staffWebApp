import React from 'react';
import {connect} from 'react-redux';
import selectShowings from '../../selectors/showings';
import ShowingItem from './ShowingItem';

const ShowingsList = (props) => (
    <div className="showingsList">
        <h2>Showing list: </h2>
            <div>
                {props.showings.map((showing) => {
                    return <ShowingItem key={showing.id} showing={showing}/>
                })}
            </div>
    </div>
)

const mapStateToProps = (store) => {
    return {
        showings: selectShowings(store.showings)
    }
}

export default connect(mapStateToProps)(ShowingsList);