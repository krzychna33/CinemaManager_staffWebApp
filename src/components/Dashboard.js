import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ShowingsList from './showings/ShowingsList';
import {startGetShowings} from '../actions/showings'


class Dashboard extends React.Component{
    _isMounted = false;
    constructor(){
        super();
        this.state = {
            showingsGot: false
        }
    }

    componentDidMount(){
        this._isMounted = true;
        this.props.startGetShowings().then(() => {
            if(this._isMounted){
                this.setState(() => ({showingsGot: true}))
            }
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){
        return (
            <div className="dashboard__wrapper">
                <Link to="/add-showing" className="btn btn-primary dashboard__button">Add showing</Link>
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