import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Home></Home>
        <footer className="">
          <div className="mb-2 text-gray-400 text-xs sm:text-sm text-center">
              ©2022 Created with Create React App, Tailwind CSS.
          </div>
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
