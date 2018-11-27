import React from 'react';
import {connect} from 'react-redux'
import {history} from './AppRouter';
import Header from '../components/Header';

export default (ComposedComponent) => {
    class Authenticate extends React.Component{

    componentWillMount(){
        if(!this.props.isAuthenticated){
            history.push('/')
        }
    }

    componentWillUpdate(nextProps){
        if(!nextProps.isAuthenticated){
            history.push('/')
        }
    }

        render(){
            return (
                <div>
                    <Header/>
                    <ComposedComponent {...this.props}/>
                </div>
            )
        }
    }
    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }
    
    return connect(mapStateToProps)(Authenticate)
}

