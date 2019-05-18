import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './components/login.js';
import { MainPage } from './components/mainPage.js';
import './index.css';


class Body extends React.Component {
    constructor(props){
        super(props);
        this.updateBody.bind(this);
    }

    updateBody(){
        if(this.props.isLoggedIn){
            return(
                <div>
                    <MainPage />
                </div>
            )
        } else {
            return(
                <div>
                    <Login />
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
        this.state = {
            isLoggedIn: false
        } 
    }

    // toggleStatus(){
    //     this.setState({
    //         isLoggedIn: !isLoggedIn.value
    //     });
    // }

    render() {
        return (
            <div>
                <Body/>
            </div>
        )
    }
}

ReactDOM.render(<ToRender />, document.getElementById('root'));
