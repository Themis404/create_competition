import React, { Component } from 'react';
import InputInfo from './components/InputInfo.js'
import TabelComp from './components/TabelComp.js'
import './App.css';

class App extends Component {
  render() {
    return (
     <div className='flex-container'>
      <InputInfo />
      <TabelComp />
     </div>
    );
  }
}

export default App;
