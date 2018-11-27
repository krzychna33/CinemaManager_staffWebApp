import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import {startLogin} from '../../actions/auth';

class LoginPage extends React.Component {
    
    constructor(){
        super();
        this.state = {
            errors: []
        }
    }

    componentWillMount(){
        if(this.props.isAuthenticated){
            this.props.history.push('/dashboard')
        }
    }

    onSubmit = (data, error) => {
        if(error){
            this.setState((prevState) => ({
                errors: [
                    ...prevState.errors,
                    error
                ]
            }))
        } else {
            this.props.startLogin(data).then(() => {
                this.props.history.push('/dashboard');
            }).catch((e) => {
                this.setState((prevState) => ({
                    errors: [
                        ...prevState.errors,
                        'Oops! Wrong email or password!'
                    ]
                }))
            })
        }
    }

    render(){
        return (
            <div>
                <h1>Welcome to CinemaStaff panel!</h1>
                <p>Please log in.</p>
                {
                    this.state.errors.length > 0 && <p>{this.state.errors[this.state.errors.length-1]}</p>
                }
                <LoginForm onSubmit={this.onSubmit}/>

                <p>CinemaStaff v.0.1 | krzychnadev</p>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (data) => dispatch(startLogin(data))
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)