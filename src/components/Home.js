import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { NavLink } from 'react-router-dom';


export default class Home extends Component {
    render(){
        return (
            <div>
            <NavBar/>
                <h1>Home Page with a "welcome to my page" and general information about me"</h1>
            </div>
        )
    }
}
