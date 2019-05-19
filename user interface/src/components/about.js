import React from 'react';
import './mainPage.css';

export class About extends React.Component {
    
    render() {
        return(
            <div>
                <p>{this.props.usn}</p>
            </div>
        )
    }
}