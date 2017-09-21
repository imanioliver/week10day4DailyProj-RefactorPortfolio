import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-light" >

            <div className="collapse navbar-collapse" id="navbarText">
               <div className="navbar-nav mr-auto">
                 <div className="nav-item active">
                   <NavLink className="nav-link" to="/home">Home </NavLink>
                 </div>
                 <div className="nav-item">
                   <NavLink className="nav-link" to="/about">My Web Developer Story</NavLink>
                 </div>
                 <div className="nav-item">
                   <NavLink className="nav-link" to="/cv">Curriculum Vitae</NavLink>
                 </div>
               </div>
               <span className="navbar-text">
                 turning lemons into lemonade
               </span>
             </div>

            </nav>
        )
    }
}
