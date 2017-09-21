import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import EnterButton from './EnterButton'

export default class Enter extends Component {

    render(){

        let nameStyle = {
              "fontFamily": "Arizonia",
              "fontSize": "18rem"
            }

        return (
            <div id="enterName">
                <h1 className="myName" style={nameStyle}>Imani Oliver</h1>
                <EnterButton/>
            </div>
        )
    }
}
