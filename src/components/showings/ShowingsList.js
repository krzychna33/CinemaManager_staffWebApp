import React from 'react';
import {connect} from 'react-redux';
import selectShowings from '../../selectors/showings';
import ShowingItem from './ShowingItem';

const ShowingsList = (props) => (
    <div>
        <h4>Showing list: </h4>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Movie title</th>
                    <th>Showing time</th>
                    <th>Price</th>
                    <th>Active</th>
                    <th>Edit</th>
                    <th>Remove</th>
                    <th>Show reservations</th>
                </tr>
            </thead>
            <tbody>
                {props.showings.map((showing) => {
                    return <ShowingItem key={showing.id} showing={showing}/>
                })}
            </tbody>
        </table>
    </div>
)

const mapStateToProps = (store) => {
    return {
        showings: selectShowings(store.showings)
    }
}

export default connect(mapStateToProps)(ShowingsList);