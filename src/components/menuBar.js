import React from 'react';
import { Redirect } from 'react-router-dom';
import BaseComponent from '../containers/baseComponent'
import ReactDOM from 'react-dom';
import i from './enduro.png'

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
      <div className='testPositionPage backgroundMenu'>
        <ul className='menuPage menu'>
          <div className='imgLogoForm'> <img src={i} alt='logo' className='imgLogo'/> </div>
          <p><li onClick={() => this.goToState('/main')} >TABLE COMPETITIONS</li></p>
          <p><li onClick={() => this.goToState('/users')} >USERS</li></p>
          <p><li onClick={() => this.goToState('/important-massage')} >IMPORTANT MESSAGE</li></p>
          <p><li onClick={() => this.goToState('/regulations')} >REGULATIONS</li></p>
        </ul>
      </div>
    );
  }
}

export default MenuBar;
