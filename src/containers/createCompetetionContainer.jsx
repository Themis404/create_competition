import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputInfo from '../components/InputInfo.js'

class CreateCompetition extends React.Component {
    constructor(params) {
        super(params);
    }

    render() {
        return (
          <div className='flex-container'>
            <InputInfo />
          </div>
        );
    }
}

export default CreateCompetition;
