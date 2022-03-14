import React, { Component } from 'react';
import "./header.css";
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment >
            <div className='header'>
                <h2>Welcome to our BOND, your BOND </h2>
                <p>You are definitely in the right place to deal with your medication.</p>
                </div>

                
            </React.Fragment>
        );
    }
}

export default Header;