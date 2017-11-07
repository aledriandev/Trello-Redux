import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import SingUp from './SingUp.js'
import SingIn from './SingIn.js'
import Board from './Board.js'

const App = ({}) => {
  return (
    <div className='body'>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/sing-up" render={() =><SingUp/>}/>
            <Route exact path="/sing-in" render={() =><SingIn/>}/>
            <Route exact path="/board" render={() =><Board/>}/>
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
