import React from 'react';
import './login.css';

export class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleUsername(event) {
        this.setState({
            userName: event.target.value
        });
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit(event) {
        alert("User: " + this.state.userName + "\nPassword: " + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form class="main-form" onSubmit={this.handleSubmit}>
                <label className="username-input">
                    Username: 
                    <input type="text" value={this.state.value} onChange={this.handleUsername} />
                </label>
                <br/>
                <br/>
                <label className="password-input">
                    Password: 
                    <input type="password" value={this.state.value} onChange={this.handlePassword} />
                </label>
                <br/>
                <br/>
                <button onClick={this.props.handler}>Submit</button>
            </form>
        );
    }
}