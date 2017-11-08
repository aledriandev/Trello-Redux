import React, { Component } from 'react';
import logo from './whale.png';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect,NavLink} from 'react-router-dom'
import SingUp from './SingUp.js'
import SingIn from './SingIn.js'
import Board from './Board.js'

const Sing = ({}) => {
  return (
          <div className='text-center'>
            <img className='logo-big' src={logo}/>
            <NavLink to="/sing-in" className='sing-in' >Sing In</NavLink>
            <NavLink to="/sing-up" className='sing-in' >Sing Up</NavLink>
          </div>
  );
}

const App = ({users}) => {
  return (
    <div className='body'>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Sing}/>
            <Route exact path="/sing-up" render={() =><SingUp users={users}/>}/>
            <Route exact path="/sing-in" render={() =><SingIn users={users}/>}/>
            {
              users.map((user,index)=>{
                const path = '/boards-' + user.name;
                return(
                  <Route exact path={path} render={()=><Board user={user}/>}/>
                );
              })
            }
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
