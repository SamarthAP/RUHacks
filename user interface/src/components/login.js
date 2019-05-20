import React from 'react';
import './login.css';
import logo from '../logo.png';

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
            <div> 
                <div>
                    <ul className="navbar">
                        <li className="navelement">About</li>
                        <li><img className="logo" src={logo} alt=""/></li>
                    </ul>
                </div>
                <div className="main-form">
                    <h2>Please enter credentials</h2>
                    <form className="login-form" onSubmit={this.handleSubmit}>
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
                        <button id="login-button" onClick={() => this.props.handler(this.state.userName)}>Log In</button>
                    </form>
                </div>
              
            </div>            
        );
    }
}