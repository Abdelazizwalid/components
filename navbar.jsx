import React, { Component } from 'react';
import "./navbar.css"
import "./a.css"
class NavBar extends Component {
    state = {  } 
    render() { 
        return (<React.Fragment>
            <div className='container'>
            <nav>
            <h1>BOND</h1>
            <a href='/signup' className='nava'>Sign Up</a>
            <a href='/' className='nava'>Login</a>
            <a href='/' className='nava'>About</a>
            <a href='/' className='nava'>Contact Us</a>
            </nav>
            </div>
        </React.Fragment>);
    }
}
export default NavBar;
