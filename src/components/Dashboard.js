import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ShowingsList from './showings/ShowingsList';
import {startGetShowings} from '../actions/showings'


class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            showingsGot: false
        }
    }

    componentDidMount(){
        this.props.startGetShowings().then(() => {
            this.setState(() => ({showingsGot: true}))
        })
    }

    render(){
        return (
            <div>
                <Link to="/add-showing">Add showing</Link>
                {
                    this.state.showingsGot ? (
                        <ShowingsList/>
                    ) : (
                        <p>Loading...</p>
                    )
                }
                
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        startGetShowings: () => dispatch(startGetShowings())
    }
}

export default connect(undefined, mapDispatchToProps)(Dashboard);