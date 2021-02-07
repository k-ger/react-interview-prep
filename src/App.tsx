// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    );
  }
}

export default App;
