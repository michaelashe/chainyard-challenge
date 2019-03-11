import React, { Component } from 'react';
import AppNavbar from './Components/AppNavbar';
import AppCard from './Components/AppCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AppCard />
      </div>
    );
  }
}

export default App;
