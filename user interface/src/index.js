import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './components/login.js';
import { MainPage } from './components/mainPage.js';
import './index.css';

class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
        this.updateBody = this.updateBody.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin() {
        this.setState({
            isLoggedIn: true
        })
    }

    handleLogout() {
        this.setState = {
            isLoggedIn: false
        }
    }

    updateBody(){
        if(this.state.isLoggedIn){
            return(
                <div>
                    <MainPage />
                </div>
            )
        } else {
            return(
                <div>
                    <Login handler={this.handleLogin}/>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.updateBody()}
            </div>
        )
    }
}

class ToRender extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Body/>
            </div>
        )
    }
}

ReactDOM.render(<ToRender />, document.getElementById('root'));
