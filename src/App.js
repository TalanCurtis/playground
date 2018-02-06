import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import Auth from './components/Auth/Auth'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
