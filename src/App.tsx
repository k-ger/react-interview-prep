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
        <footer className="">
          <div className="mb-2 text-gray-400 text-xs sm:text-sm text-center">
              ©2021 Created with React Create App, Tailwind CSS.
          </div>
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
