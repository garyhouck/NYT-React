import React, { Component } from 'react';
import Header from './components/Header';
import Results from './components/Results';
import Saved from './components/Saved';
import Search from './components/Search';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>       
       <Header />
       <Search />
       <Results />
       <Saved />
       
      </div>
    );
  }
}

export default App;
