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
        this.onProcessHandler = this.onProcessHandler.bind(this);
        this.updateTable = this.updateTable.bind(this);
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

    onProcessHandler() {
        axios.get('http://localhost:1111/api/analyse')
        .then(res => {
            const obj = res.data;
            const vendor = obj[1].description;
            let date;
            
            // Date
            let regex = /[0-9]+\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]?$/;

            for (var i in obj){
                if(regex.test(obj[i].description)){
                    date = regex.exec(obj[i].description);
                    break;
                }
            }

            if (!date) {
                regex = /[0-9]+\/[0-9][0-9]\/[0-9][0-9]?$/;
                for (var i in obj){
                    if(regex.test(obj[i].description)){
                        date = regex.exec(obj[i].description);
                        break;
                    }
                }
            }
            
            let type;

            for (var i in obj){
                if(/[dD][eE][bB][iI][tT]/.test(obj[i].description)){
                    type = "Debit";
                    break;
                }else if(/[cC][rR][eE][dD][iI][tT]/.test(obj[i].description) || /[vV][iI][sS][aA]/.test(obj[i].description) || /[cC][aA][rR][dD]/.test(obj[i].description)){
                    type = "Credit";
                    break;
                } 
            }
            if (!type) type="Cash";

            let value;

            //regex = /^[0-9]+\.([0-9][0-9])?$/;
            regex = /[0-9]+\.[0-9][0-9]/;
            var arr = [];
        
            for (var i in obj){
                if(regex.test(obj[i].description)){
                    let match = regex.exec(obj[i].description);
                    arr.push(match);
                }
            }

            arr.sort((a, b) => {return a-b});
            
            value = arr[arr.length - 1];
            
            let bill = {
                vendor: vendor,
                date: date,
                transaction_type: type,
                total: parseInt(value, 10)
            }

            // this.props.usn
            axios.put('http://localhost:1111/api/' + this.props.usn + '/addbill', bill)
                .then(res => {
                    console.log(res.data.bills);
                    
                    axios.get('http://localhost:1111/api/' + this.props.usn + '/getbills', {})
                    .then(res => {
                        this.updateTable(res.data);
                    })
                });
       
        })
    }

    updateTable(bills){

        var table = document.getElementById('table')
        table.innerHTML = `<tr>
            <th>Vendor</th>
            <th>Date</th>
            <th>Transaction Type</th>
            <th>Total </th>
            </tr>`;
        for (var i in bills){
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + bills[i].vendor + '</td><td>' + bills[i].date + '</td><td>' + bills[i].transaction_type + '</td><td>' + bills[i].total + '</td>'
            table.appendChild(tr)
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1111/api/' + this.props.usn + '/getbills', {})
            .then(res => {
                this.updateTable(res.data);
            })
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
                            <div className="process">
                            <button onClick={this.onProcessHandler}>Process</button>
                            </div>
                            <div>
                                {/*<p>Your current upload:</p>*/}
                                {/* Add image here*/}
                                {/*<p>Total:</p>*/}
                            </div>
                        </div>
                    </div>
                    

                    <div>
                        <table id="table">
                            <tr>
                                <th>Vendor</th>
                                <th>Date</th>
                                <th>Transaction Type</th>
                                <th>Total </th>
                            </tr>
                        </table>
                    </div>
                </body>
            </html>

        )
    }
}