// Modules
import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'

// Imports
import Header from './component/Header/Header'
import Route from './route'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {Route}
        </div>
      </HashRouter>
    );
  }
}

export default App;
