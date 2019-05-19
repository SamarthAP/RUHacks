import React from 'react';
import './mainPage.css';
import logo from '../logo.png';
import axios from 'axios';
import { resolve } from 'dns';

export class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    
    // <div>
    //             <p>{this.props.usn}</p>
    //         </div>
    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        // const data = new FormData();
        // data.append('file', this.setState.selectedFile);

        // axios.post("http://localhost:1111/api/upload", data, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     }
        // }).then(result => {
        //     console.log("success");
        // })

        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;

        // xhr.addEventListener("readystatechange", function () {
        //     if (this.readyState === 4) {
        //       console.log(this.responseText);
        //     }
        //   });
          
        //   xhr.open("POST", "http://localhost:1111/api/upload");
        //   xhr.setRequestHeader("cache-control", "no-cache");
        //   xhr.setRequestHeader("Postman-Token", "7a210a60-a3a1-44c7-9cfa-155669b8be3a");
          
        //   xhr.send(data);

        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();

            const formData = new FormData();
            formData.append("file", this.state.selectedFile, this.state.selectedFile.name)

            req.open("POST", "http://localhost:1111/api/upload");
            req.send(formData);
        });
    }

    render() {
        return(
            <html>
                <head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
                </head>
                <body>
                    <div>
                        <ul className="navbar">
                            <li className="navelement">About</li>
                            <li className="navelement">History</li>
                            <li className="navelement">Stats</li>
                            <li className="navelement">Home</li>
                            <li><img className="logo" src={logo} alt=""/></li>
                        </ul>
                    </div>
                    <div>
                        <div className="upload">
                           
                            <input type="file" name="file" onChange={this.onChangeHandler}/>
                            <button onClick={this.onClickHandler}>Upload</button>
                           
                            <div>
                                <p>Your current upload:</p>
                                {/* Add image here*/}
                                <p>Total:</p>
                            </div>
                        </div>
                    </div>
                </body>
            </html>

        )
    }
}