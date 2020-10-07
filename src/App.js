import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './UI/Landing/Landing'
import HomePage from './UI/Home/HomePage'

class App extends Component {

  render (){
    return (
      <BrowserRouter>
      <div className="App">
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/home' component={HomePage}></Route>
      </div>
      </BrowserRouter>
    );
  }
 
}

export default App;
