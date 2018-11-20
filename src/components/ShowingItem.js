import React from 'react';

export default class ShowingItem extends React.Component {

    render(){
        return (
            <tr>
                <td>
                    {this.props.showing.id}
                </td>
                <td>
                    {this.props.showing.movieTitle}
                </td>
                <td>
                    {this.props.showing.showingTime}
                </td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Remove</button>
                </td>
            </tr>
        )
    }
}