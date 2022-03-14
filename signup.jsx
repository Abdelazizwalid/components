import React, { Component } from 'react';
import "./signup.css";

class Sign extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                
                <form className='sign_form'>
                <h1>Sign up</h1>
                    <div className='input_form'>

                        <input className='firstname' placeholder='First Name*'>
                        </input>
                        <input className='lastname' placeholder='Last Name*'>
                        </input>

                        <div className='id'>
                        <input className='org_id' type="tel" placeholder='Organization ID*'>
                        </input>
                        
                        <input className='owner_id' type="tel" placeholder='Owner ID*'>
                        </input>
                        </div>
                        <div className='additional'>
                        <input className='serial_code' type="tel" placeholder='Serial Code*'>
                        </input>

                        <input className='gmail' type="email" placeholder='Gmail*'>
                        </input>
                        
                        <input className='pass' type="password" placeholder='Password*'>
                        </input>
                        </div>
                    </div>
                    <button className='signup'>SIGN UP</button>
                    <a className='have' href='/'>Already have an account? Sign in</a>
                    
                    <footer>Copyright © <a href='/'>BOND</a> 2022. </footer>

                </form>







            </React.Fragment>
        );
    }
}

export default Sign;