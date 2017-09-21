import React, { Component } from 'react';
import '../styles/App.css';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar.js';

export default class BaseLayout extends Component {

    render(){
        let nameStyle = {
              "fontFamily": "Arizonia",
              "fontSize": "18rem"
            }

        return (

            <div className="App">




                <div className="colorDiv">
                    {this.props.children}
                </div>


            </div>
        )
    }
}
