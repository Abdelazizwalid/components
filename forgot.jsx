import React, { Component } from 'react';
import "./forgot.css"
class Forgot extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='forgot_container'>
                <div className='forgot_pass'>
                    <h1 className='h1_for'> Forgot Password</h1>
                    <input type='email' placeholder='Enter Your Email' className='email_for'></input>
                    <button type='submit' className='btn_forgot'> Submit </button>
                </div>
                <footer>Copyright © <a href='/'>BOND</a> 2022. </footer>
                </div>
            </React.Fragment>
        );
    }
}

export default Forgot;