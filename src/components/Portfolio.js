import React, { Component } from 'react';
import NavBar from './NavBar.js';
import { NavLink } from 'react-router-dom';

export default class Portfolio extends Component {
    render(){
        return (
            <div>
            <NavBar/>
                <h3> this is my Portfolio page. it should have links to my github projects and some photos of them </h3>
            </div>
        )
    }
}
