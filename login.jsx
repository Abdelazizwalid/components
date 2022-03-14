import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import "./login.css"
class Login extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <form className='login'>
                    <div>
                        <img src='https://pbs.twimg.com/profile_images/672710858342989825/IacaTVCE_400x400.jpg' alt='BOND'></img>
                        <input placeholder='ُEmail' type="email"></input>
                        <input placeholder='Password' type="password"></input>
                        <button type='submit'>Login</button>
                        <span> Forgot your <a href='/'>Password? </a></span>
                        <hr></hr>
                        
                    </div>
                    <footer>Copyright © <a href='/'>BOND</a> 2022. </footer>

                </form>
            </React.Fragment>
        );
    }
}

export default withRouter (Login);