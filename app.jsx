import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Route,Routes, Switch } from 'react-router-dom';



//import Forgot from './components/forgot';
//import Content from './components/content';
//import NavBar from './components/navbar';
import Sign from './components/signup';
import Login from './components/login';
import NavBar from './components/navbar';

class App extends Component {
    state = { 
    
    };
    render() { 
        return (   
        <React.Fragment>
               <NavBar/>
            <Router>
                <Switch>
                <Route path='Login' component={Login}></Route>
                </Switch>
            </Router>
        </React.Fragment>
        );
    }
}

export default App ;