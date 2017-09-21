import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class EnterButton extends Component {
    render(){
        return (
            <div>
                <button className="btn"><NavLink to="/home">Enter</NavLink> </button>
            </div>
        )
    }
}
