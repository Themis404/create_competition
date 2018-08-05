import React from 'react';
import { Redirect } from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';
import logo from './enduro.png'

class MenuBar extends BaseComponent{

  constructor(props) {
    super(props);
  }

  render(){
    if (this.reload) {
        this.reload = false;
        return <Redirect to={this.redirect} push={true} />;
    }
    return(
      <nav className='navbar navbar-default'>
        <div className='container'>
          <div className="navbar-header">
            <a className='navbar-brand'> ENDURO </a>
          </div>
          <ul className='nav navbar-nav'>
            <li> <a className='active' onClick={() => this.goToState('/main')} >TABLE COMPETITIONS</a></li>
            <li> <a  onClick={() => this.goToState('/users')} >USERS</a></li>
            <li> <a  onClick={() => this.goToState('/announcement')} >ANNOUNCEMENT</a></li>
            <li> <a  onClick={() => this.goToState('/regulations')} >REGULATIONS</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MenuBar;
