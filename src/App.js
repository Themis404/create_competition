import React, { Component } from 'react';
import InputInfo from './components/InputInfo.js'
import CompetitionTable from './components/CompetitionTable.js'
import './App.css';

class App extends Component {
  render() {
    return (
     <div className='flex-container'>
       <InputInfo />
       <CompetitionTable />
     </div>
    );
  }
}

export default App;
