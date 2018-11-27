import React from 'react';

export default class LoginForm extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.email || !this.state.password){
            this.props.onSubmit(undefined, 'You have to provide email and password.');
        } else {
            this.props.onSubmit({
                email: this.state.email,
                password: this.state.password
            })
        }
    }
    

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input className="form-control" name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <input className="form-control" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-ligh login__button">Login</button>
                </div>
                
            </form>
        )
    }
}